// mocks/company-overview.ts

/**
 * Typ definující strukturu dat pro přehled o společnosti,
 * jak je vrací API.
 */
export type TCompanyOverview = {
  '50DayMovingAverage': string;
  '52WeekHigh': string;
  '52WeekLow': string;
  '200DayMovingAverage': string;
  Address: string;
  AnalystRatingBuy: string;
  AnalystRatingHold: string;
  AnalystRatingSell: string;
  AnalystRatingStrongBuy: string;
  AnalystRatingStrongSell: string;
  AnalystTargetPrice: string;
  AssetType: string;
  Beta: string;
  BookValue: string;
  CIK: string;
  Country: string;
  Currency: string;
  Description: string;
  DilutedEPSTTM: string;
  DividendDate: string;
  DividendPerShare: string;
  DividendYield: string;
  EBITDA: string;
  EPS: string;
  EVToEBITDA: string;
  EVToRevenue: string;
  Exchange: string;
  ExDividendDate: string;
  FiscalYearEnd: string;
  ForwardPE: string;
  GrossProfitTTM: string;
  Industry: string;
  LatestQuarter: string;
  MarketCapitalization: string;
  Name: string;
  OfficialSite: string;
  OperatingMarginTTM: string;
  PEGRatio: string;
  PERatio: string;
  PercentInsiders: string;
  PercentInstitutions: string;
  PriceToBookRatio: string;
  PriceToSalesRatioTTM: string;
  ProfitMargin: string;
  QuarterlyEarningsGrowthYOY: string;
  QuarterlyRevenueGrowthYOY: string;
  ReturnOnAssetsTTM: string;
  ReturnOnEquityTTM: string;
  RevenuePerShareTTM: string;
  RevenueTTM: string;
  Sector: string;
  SharesFloat: string;
  SharesOutstanding: string;
  Symbol: string;
  TrailingPE: string;
};

/**
 * Mock data pro přehled o společnosti Apple (AAPL).
 * Použijte pro vývoj a testování bez nutnosti volat API.
 */
export const aaplCompanyOverviewMock: TCompanyOverview = {
  '50DayMovingAverage': '252.25',
  '52WeekHigh': '277.05',
  '52WeekLow': '168.63',
  '200DayMovingAverage': '224.4',
  Address: 'ONE APPLE PARK WAY, CUPERTINO, CA, UNITED STATES, 95014',
  AnalystRatingBuy: '24',
  AnalystRatingHold: '15',
  AnalystRatingSell: '1',
  AnalystRatingStrongBuy: '5',
  AnalystRatingStrongSell: '3',
  AnalystTargetPrice: '280.46',
  AssetType: 'Common Stock',
  Beta: '1.109',
  BookValue: '4.991',
  CIK: '320193',
  Country: 'USA',
  Currency: 'USD',
  Description: `Apple Inc. is a leading American multinational technology company that specializes in innovative consumer electronics, software, and online services. With a record revenue of $274.5 billion in 2020, it holds the title of the world's most valuable publicly traded company and is a dominant force in the global technology landscape. Its flagship products, such as the iPhone, iPad, and Mac, have cemented its reputation as a trailblazer in the sector, positioning it as the fourth-largest PC vendor and smartphone manufacturer worldwide. As a cornerstone of the "Big Five" technology companies, Apple continues to set industry standards and drive advancements in technology and consumer engagement.`,
  DilutedEPSTTM: '7.46',
  DividendDate: '2025-11-13',
  DividendPerShare: '1.02',
  DividendYield: '0.0038',
  EBITDA: '144748003000',
  EPS: '7.46',
  EVToEBITDA: '27.26',
  EVToRevenue: '9.45',
  Exchange: 'NASDAQ',
  ExDividendDate: '2025-11-10',
  FiscalYearEnd: 'September',
  ForwardPE: '32.05',
  GrossProfitTTM: '195201008000',
  Industry: 'CONSUMER ELECTRONICS',
  LatestQuarter: '2025-09-30',
  MarketCapitalization: '3967007326000',
  Name: 'Apple Inc',
  OfficialSite: 'https://www.apple.com',
  OperatingMarginTTM: '0.317',
  PEGRatio: '2.466',
  PERatio: '35.99',
  PercentInsiders: '1.979',
  PercentInstitutions: '63.966',
  PriceToBookRatio: '57.97',
  PriceToSalesRatioTTM: '9.53',
  ProfitMargin: '0.269',
  QuarterlyEarningsGrowthYOY: '0.912',
  QuarterlyRevenueGrowthYOY: '0.079',
  ReturnOnAssetsTTM: '0.23',
  ReturnOnEquityTTM: '1.714',
  RevenuePerShareTTM: '27.84',
  RevenueTTM: '416161006000',
  Sector: 'TECHNOLOGY',
  SharesFloat: '14750199000',
  SharesOutstanding: '14776353000',
  Symbol: 'AAPL',
  TrailingPE: '35.99',
};
