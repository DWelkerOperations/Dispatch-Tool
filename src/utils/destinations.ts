// Domestic means United States plus U.S. territories for catering/TCI classification.
// Source basis: OurAirports IATA rows with scheduled service for US, PR, VI, GU, MP, and AS.
const domesticAirportCodes = new Set([
  "ABE", "ABI", "ABL", "ABQ", "ABR", "ABY", "ACK", "ACT", "ACV", "ACY", "ADK", "ADQ", "AET", "AEX", "AGN", "AGS",
  "AIA", "AIN", "AKB", "AKI", "AKK", "AKN", "AKP", "ALB", "ALO", "ALS", "ALW", "ALZ", "AMA", "ANC", "ANI", "ANV",
  "AOO", "AOS", "APN", "ARC", "ART", "ASE", "ATK", "ATL", "ATT", "ATW", "ATY", "AUG", "AUK", "AUS", "AVL", "AVP",
  "AZA", "AZO", "BDL", "BED", "BET", "BFD", "BFF", "BFI", "BFL", "BGM", "BGR", "BHB", "BHM", "BID", "BIH", "BIL",
  "BIS", "BJC", "BKC", "BKF", "BKG", "BKW", "BLD", "BLI", "BLV", "BMI", "BNA", "BOI", "BOS", "BPT", "BQK", "BQN",
  "BRD", "BRL", "BRO", "BRW", "BTI", "BTM", "BTR", "BTT", "BTV", "BUF", "BUR", "BWI", "BYW", "BZN", "CAE", "CAK",
  "CCR", "CDB", "CDC", "CDR", "CDV", "CEC", "CEM", "CEZ", "CGA", "CGI", "CHA", "CHO", "CHS", "CHU", "CID", "CIK",
  "CIU", "CKB", "CKD", "CKX", "CLD", "CLE", "CLL", "CLP", "CLT", "CMH", "CMI", "CMX", "CNM", "CNY", "COD", "COS",
  "COU", "CPR", "CPX", "CRP", "CRW", "CSG", "CVG", "CVN", "CWA", "CWS", "CYF", "CYM", "CYS", "CYT", "DAB", "DAL",
  "DAY", "DBQ", "DCA", "DDC", "DEC", "DEN", "DFW", "DHB", "DHN", "DIK", "DIO", "DLG", "DLH", "DOV", "DRG", "DRO",
  "DSI", "DSM", "DTR", "DTW", "DUJ", "DUT", "DVL", "EAA", "EAR", "EAT", "EAU", "ECP", "EDA", "EEK", "EGE", "EGX",
  "EKO", "ELD", "ELI", "ELM", "ELP", "ELV", "EMK", "ENA", "ERI", "ESC", "ESD", "EUG", "EVV", "EWB", "EWN", "EWR",
  "EXI", "EYW", "FAI", "FAR", "FAT", "FAY", "FBS", "FCA", "FLG", "FLL", "FLO", "FNR", "FNT", "FOD", "FRD", "FSD",
  "FSM", "FTI", "FTW", "FWA", "FYU", "GAL", "GAM", "GCC", "GCK", "GCN", "GDV", "GEG", "GFK", "GGG", "GGW", "GJT",
  "GKN", "GLH", "GLV", "GNU", "GNV", "GPT", "GRB", "GRI", "GRK", "GRR", "GSO", "GSP", "GST", "GTF", "GTR", "GUC",
  "GUM", "GUP", "GYY", "HCR", "HDN", "HGR", "HHH", "HHR", "HIB", "HII", "HLN", "HNH", "HNL", "HNM", "HNS", "HOB",
  "HOM", "HOT", "HOU", "HPB", "HPN", "HRL", "HRO", "HSL", "HSV", "HTS", "HUS", "HVN", "HVR", "HYA", "HYG", "HYL",
  "HYS", "IAD", "IAG", "IAH", "IAN", "ICT", "IDA", "IGG", "IKO", "ILG", "ILI", "ILM", "IMT", "IND", "INL", "IPL",
  "IPT", "IRC", "IRK", "ISP", "ITH", "ITO", "IWD", "JAC", "JAN", "JAX", "JBR", "JFK", "JHM", "JLN", "JMS", "JNU",
  "JRA", "JST", "KAE", "KAL", "KBC", "KCC", "KCG", "KCQ", "KEB", "KEH", "KFP", "KGK", "KGX", "KKA", "KKB", "KKH",
  "KKI", "KLG", "KLN", "KLW", "KMO", "KMY", "KNK", "KNW", "KOA", "KOT", "KOY", "KOZ", "KPB", "KPN", "KPR", "KPV",
  "KPY", "KQA", "KSM", "KTB", "KTN", "KTS", "KUK", "KVC", "KVL", "KWK", "KWN", "KWP", "KWT", "KXA", "KYK", "KYU",
  "KZB", "LAF", "LAL", "LAN", "LAR", "LAS", "LAW", "LAX", "LBB", "LBE", "LBF", "LBL", "LCH", "LCK", "LEB", "LEX",
  "LFT", "LGA", "LGB", "LIH", "LIT", "LKE", "LMA", "LNK", "LNS", "LNY", "LPS", "LRD", "LRU", "LSE", "LUK", "LUP",
  "LUR", "LWB", "LWS", "LYH", "MAF", "MAZ", "MBL", "MBS", "MCE", "MCG", "MCI", "MCK", "MCN", "MCO", "MCW", "MDT",
  "MDW", "MEI", "MEM", "MFE", "MFR", "MGC", "MGM", "MGW", "MHK", "MHT", "MIA", "MKE", "MKG", "MKK", "MKL", "MLB",
  "MLI", "MLL", "MLU", "MLY", "MMH", "MNT", "MOB", "MOT", "MOU", "MQT", "MRI", "MRY", "MSL", "MSN", "MSO", "MSP",
  "MSS", "MSY", "MTJ", "MTM", "MTP", "MUE", "MVY", "MWA", "MWL", "MYK", "MYL", "MYR", "MYU", "NCN", "NIB", "NKI",
  "NLG", "NME", "NPT", "NRR", "NUI", "NUL", "NUP", "NYS", "OAJ", "OAK", "OBU", "OCE", "OFU", "OGD", "OGG", "OGS",
  "OKC", "OLF", "OLH", "OLM", "OMA", "OME", "ONT", "OOK", "OPF", "ORD", "ORF", "ORH", "ORI", "ORT", "ORV", "OTH",
  "OTS", "OTZ", "OWB", "PAE", "PAH", "PBG", "PBI", "PDB", "PDK", "PDT", "PDX", "PEC", "PGA", "PGD", "PGM", "PGV",
  "PHF", "PHL", "PHO", "PHX", "PIA", "PIB", "PIE", "PIH", "PIP", "PIR", "PIT", "PIZ", "PKA", "PKB", "PLN", "PNS",
  "PPG", "PPV", "PQI", "PQS", "PRC", "PSC", "PSE", "PSG", "PSM", "PSP", "PTA", "PTD", "PTH", "PTU", "PUB", "PUW",
  "PVD", "PVU", "PWM", "RAP", "RBY", "RCE", "RDD", "RDM", "RDU", "RDV", "RFD", "RHI", "RIC", "RIW", "RKD", "RKS",
  "RMP", "RNO", "ROA", "ROC", "ROP", "ROW", "RSH", "RSJ", "RST", "RSW", "RUT", "SAF", "SAN", "SAT", "SAV", "SBA",
  "SBD", "SBN", "SBP", "SBY", "SCC", "SCE", "SCK", "SCM", "SDF", "SDP", "SDY", "SEA", "SFB", "SFO", "SGF", "SGU",
  "SGY", "SHD", "SHG", "SHH", "SHR", "SHV", "SIG", "SIT", "SJC", "SJT", "SJU", "SKK", "SLC", "SLE", "SLK", "SLN",
  "SLQ", "SMF", "SMK", "SMN", "SMX", "SNA", "SNP", "SOV", "SOW", "SPB", "SPI", "SPN", "SPS", "SQL", "SRQ", "SRV",
  "SSB", "SSW", "STC", "STG", "STL", "STS", "STT", "STX", "SUN", "SUX", "SVA", "SVC", "SVS", "SWF", "SWO", "SXP",
  "SYB", "SYR", "TAL", "TBN", "TCT", "TEB", "TEK", "TEX", "TIQ", "TIW", "TKE", "TKF", "TKJ", "TLA", "TLH", "TLT",
  "TNC", "TNK", "TOG", "TOL", "TPA", "TRI", "TSM", "TSS", "TTN", "TUL", "TUP", "TUS", "TVC", "TVF", "TWA", "TWF",
  "TXK", "TYR", "TYS", "UGI", "UIN", "UNK", "USA", "UST", "UTO", "VAK", "VCT", "VDZ", "VEE", "VEL", "VLD", "VPS",
  "VQS", "VRB", "WAA", "WBB", "WBQ", "WDN", "WFB", "WHD", "WKK", "WLK", "WMO", "WNA", "WRG", "WSN", "WST", "WSX",
  "WTK", "WTL", "WWP", "WWT", "WYS", "XNA", "XWA", "YAK", "YKM", "YUM",
]);

const canadianAirportCodes = new Set([
  "YAM", "YAY", "YAZ", "YBB", "YBC", "YBG", "YBK", "YBL", "YBR", "YCB", "YCD", "YCG", "YCH", "YCL", "YCO", "YDF",
  "YEG", "YEK", "YEV", "YFB", "YFC", "YFO", "YFS", "YGK", "YGL", "YGP", "YGR", "YGT", "YGW", "YHD", "YHM", "YHY",
  "YHZ", "YJT", "YKA", "YKF", "YKL", "YLL", "YLW", "YMM", "YMO", "YMT", "YMX", "YNA", "YNM", "YOC", "YOD", "YOJ",
  "YOW", "YPA", "YPE", "YPG", "YPL", "YPN", "YPQ", "YPR", "YPW", "YQB", "YQF", "YQG", "YQH", "YQK", "YQL", "YQM",
  "YQQ", "YQR", "YQT", "YQU", "YQV", "YQX", "YQY", "YQZ", "YRB", "YRL", "YRT", "YSB", "YSJ", "YSM", "YTH", "YTS",
  "YTZ", "YUL", "YUT", "YUX", "YUY", "YVC", "YVO", "YVP", "YVQ", "YVR", "YWG", "YWK", "YWL", "YWY", "YXC", "YXE",
  "YXH", "YXJ", "YXL", "YXS", "YXT", "YXU", "YXX", "YXY", "YYB", "YYC", "YYD", "YYE", "YYF", "YYG", "YYJ", "YYQ",
  "YYR", "YYT", "YYU", "YYY", "YYZ", "YZF", "YZP", "YZR", "YZT", "YZV", "YZW", "YZX", "ZBF", "ZFM", "ZFN", "ZKE",
  "ZMT", "ZPB", "ZRJ", "ZSJ", "ZTM", "ZUM", "ZWL",
]);

export function normalizeIataCode(destinationAirport?: string) {
  const code = destinationAirport?.trim().toUpperCase() ?? "";
  return /^[A-Z]{3}$/.test(code) ? code : "";
}

export function isDomesticDestination(destinationAirport?: string) {
  const code = normalizeIataCode(destinationAirport);
  return code ? domesticAirportCodes.has(code) || canadianAirportCodes.has(code) : true;
}

export function isInternationalDestination(destinationAirport?: string) {
  const code = normalizeIataCode(destinationAirport);
  return code ? !domesticAirportCodes.has(code) && !canadianAirportCodes.has(code) : false;
}
