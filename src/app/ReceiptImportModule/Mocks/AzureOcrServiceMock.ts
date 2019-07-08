import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { AzureOcrServiceBase } from '../interfaces/AzureOcrServiceBase';
import { IOcrRecognitionResult } from '../interfaces/iocr-recognition-result';


@Injectable()
export class AzureOcrServiceMock extends AzureOcrServiceBase {
   constructor() {
      super();
   }

   private returnData =
      {
         "lines": [
            {
               "boundingBox": [
                  141,
                  136,
                  464,
                  135,
                  465,
                  160,
                  142,
                  161
               ],
               "text": "Rossmann SDP Sklep nr 191",
               "words": [
                  {
                     "boundingBox": [
                        144,
                        137,
                        248,
                        137,
                        248,
                        161,
                        144,
                        159
                     ],
                     "text": "Rossmann"
                  },
                  {
                     "boundingBox": [
                        261,
                        136,
                        300,
                        136,
                        300,
                        161,
                        261,
                        161
                     ],
                     "text": "SDP"
                  },
                  {
                     "boundingBox": [
                        312,
                        136,
                        377,
                        136,
                        377,
                        160,
                        312,
                        161
                     ],
                     "text": "Sklep"
                  },
                  {
                     "boundingBox": [
                        387,
                        136,
                        415,
                        136,
                        415,
                        160,
                        387,
                        160
                     ],
                     "text": "nr"
                  },
                  {
                     "boundingBox": [
                        428,
                        135,
                        465,
                        135,
                        465,
                        158,
                        428,
                        159
                     ],
                     "text": "191"
                  }
               ]
            },
            {
               "boundingBox": [
                  205,
                  163,
                  401,
                  161,
                  402,
                  185,
                  206,
                  187
               ],
               "text": "ul . B. Prusa 46",
               "words": [
                  {
                     "boundingBox": [
                        208,
                        164,
                        233,
                        163,
                        233,
                        186,
                        208,
                        186
                     ],
                     "text": "ul"
                  },
                  {
                     "boundingBox": [
                        238,
                        163,
                        252,
                        163,
                        252,
                        186,
                        237,
                        186
                     ],
                     "text": "."
                  },
                  {
                     "boundingBox": [
                        260,
                        163,
                        291,
                        163,
                        290,
                        186,
                        259,
                        186
                     ],
                     "text": "B."
                  },
                  {
                     "boundingBox": [
                        298,
                        163,
                        366,
                        162,
                        365,
                        186,
                        298,
                        186
                     ],
                     "text": "Prusa"
                  },
                  {
                     "boundingBox": [
                        377,
                        162,
                        402,
                        162,
                        401,
                        185,
                        376,
                        185
                     ],
                     "text": "46"
                  }
               ]
            },
            {
               "boundingBox": [
                  195,
                  187,
                  388,
                  188,
                  387,
                  212,
                  194,
                  211
               ],
               "text": "05-800 Pruszkow",
               "words": [
                  {
                     "boundingBox": [
                        195,
                        188,
                        276,
                        188,
                        275,
                        212,
                        195,
                        211
                     ],
                     "text": "05-800"
                  },
                  {
                     "boundingBox": [
                        285,
                        188,
                        388,
                        189,
                        387,
                        212,
                        284,
                        212
                     ],
                     "text": "Pruszkow"
                  }
               ]
            },
            {
               "boundingBox": [
                  116,
                  216,
                  336,
                  214,
                  336,
                  237,
                  117,
                  240
               ],
               "text": "Nr rej. 000003093",
               "words": [
                  {
                     "boundingBox": [
                        118,
                        217,
                        146,
                        217,
                        145,
                        240,
                        117,
                        240
                     ],
                     "text": "Nr"
                  },
                  {
                     "boundingBox": [
                        156,
                        217,
                        216,
                        216,
                        215,
                        239,
                        156,
                        240
                     ],
                     "text": "rej.",
                     "confidence": "Low"
                  },
                  {
                     "boundingBox": [
                        222,
                        216,
                        336,
                        214,
                        336,
                        238,
                        221,
                        239
                     ],
                     "text": "000003093"
                  }
               ]
            },
            {
               "boundingBox": [
                  190,
                  241,
                  413,
                  239,
                  414,
                  263,
                  191,
                  265
               ],
               "text": "NIP 727-601-91-83",
               "words": [
                  {
                     "boundingBox": [
                        193,
                        243,
                        234,
                        242,
                        235,
                        265,
                        194,
                        265
                     ],
                     "text": "NIP"
                  },
                  {
                     "boundingBox": [
                        250,
                        242,
                        414,
                        240,
                        414,
                        264,
                        250,
                        265
                     ],
                     "text": "727-601-91-83",
                     "confidence": "Low"
                  }
               ]
            },
            {
               "boundingBox": [
                  53,
                  268,
                  260,
                  267,
                  261,
                  291,
                  54,
                  292
               ],
               "text": "2019-05-29 15:57",
               "words": [
                  {
                     "boundingBox": [
                        57,
                        268,
                        187,
                        269,
                        187,
                        291,
                        57,
                        292
                     ],
                     "text": "2019-05-29"
                  },
                  {
                     "boundingBox": [
                        198,
                        269,
                        260,
                        268,
                        260,
                        292,
                        197,
                        291
                     ],
                     "text": "15:57"
                  }
               ]
            },
            {
               "boundingBox": [
                  489,
                  267,
                  568,
                  267,
                  567,
                  289,
                  488,
                  288
               ],
               "text": "656932",
               "words": [
                  {
                     "boundingBox": [
                        490,
                        267,
                        567,
                        268,
                        567,
                        289,
                        490,
                        289
                     ],
                     "text": "656932"
                  }
               ]
            },
            {
               "boundingBox": [
                  102,
                  293,
                  511,
                  292,
                  512,
                  316,
                  103,
                  318
               ],
               "text": "PARAGON FISKALNY",
               "words": [
                  {
                     "boundingBox": [
                        107,
                        295,
                        276,
                        293,
                        276,
                        318,
                        108,
                        318
                     ],
                     "text": "PARAGON"
                  },
                  {
                     "boundingBox": [
                        313,
                        293,
                        512,
                        293,
                        512,
                        317,
                        313,
                        318
                     ],
                     "text": "FISKALNY"
                  }
               ]
            },
            {
               "boundingBox": [
                  53,
                  321,
                  310,
                  320,
                  311,
                  343,
                  54,
                  344
               ],
               "text": "BOBOVITA KASZKA S\\BL",
               "words": [
                  {
                     "boundingBox": [
                        56,
                        323,
                        159,
                        322,
                        159,
                        344,
                        56,
                        344
                     ],
                     "text": "BOBOVITA"
                  },
                  {
                     "boundingBox": [
                        169,
                        322,
                        250,
                        321,
                        249,
                        344,
                        169,
                        344
                     ],
                     "text": "KASZKA"
                  },
                  {
                     "boundingBox": [
                        261,
                        321,
                        311,
                        321,
                        310,
                        344,
                        261,
                        344
                     ],
                     "text": "S\\BL"
                  }
               ]
            },
            {
               "boundingBox": [
                  398,
                  320,
                  565,
                  318,
                  566,
                  342,
                  399,
                  344
               ],
               "text": "1 x6, 99 6, 99B",
               "words": [
                  {
                     "boundingBox": [
                        404,
                        320,
                        419,
                        321,
                        419,
                        344,
                        403,
                        344
                     ],
                     "text": "1"
                  },
                  {
                     "boundingBox": [
                        427,
                        321,
                        461,
                        321,
                        461,
                        343,
                        426,
                        344
                     ],
                     "text": "x6,"
                  },
                  {
                     "boundingBox": [
                        465,
                        321,
                        495,
                        321,
                        495,
                        343,
                        465,
                        343
                     ],
                     "text": "99"
                  },
                  {
                     "boundingBox": [
                        504,
                        321,
                        526,
                        320,
                        525,
                        343,
                        504,
                        343
                     ],
                     "text": "6,"
                  },
                  {
                     "boundingBox": [
                        530,
                        320,
                        566,
                        319,
                        566,
                        343,
                        530,
                        343
                     ],
                     "text": "99B"
                  }
               ]
            },
            {
               "boundingBox": [
                  52,
                  348,
                  338,
                  346,
                  339,
                  370,
                  53,
                  372
               ],
               "text": "Rabat Rossne_10% basic",
               "words": [
                  {
                     "boundingBox": [
                        56,
                        349,
                        123,
                        348,
                        123,
                        372,
                        55,
                        371
                     ],
                     "text": "Rabat"
                  },
                  {
                     "boundingBox": [
                        132,
                        348,
                        264,
                        347,
                        265,
                        371,
                        132,
                        372
                     ],
                     "text": "Rossne_10%",
                     "confidence": "Low"
                  },
                  {
                     "boundingBox": [
                        273,
                        347,
                        338,
                        347,
                        339,
                        369,
                        274,
                        370
                     ],
                     "text": "basic"
                  }
               ]
            },
            {
               "boundingBox": [
                  493,
                  345,
                  568,
                  347,
                  567,
                  368,
                  492,
                  367
               ],
               "text": "-0, 70B",
               "words": [
                  {
                     "boundingBox": [
                        493,
                        346,
                        528,
                        347,
                        528,
                        368,
                        493,
                        367
                     ],
                     "text": "-0,",
                     "confidence": "Low"
                  },
                  {
                     "boundingBox": [
                        532,
                        347,
                        567,
                        347,
                        567,
                        368,
                        532,
                        368
                     ],
                     "text": "70B"
                  }
               ]
            },
            {
               "boundingBox": [
                  54,
                  399,
                  350,
                  398,
                  351,
                  421,
                  55,
                  423
               ],
               "text": "SPRZEDAZ OPODATKOWANA B",
               "words": [
                  {
                     "boundingBox": [
                        56,
                        402,
                        159,
                        400,
                        159,
                        422,
                        56,
                        423
                     ],
                     "text": "SPRZEDAZ"
                  },
                  {
                     "boundingBox": [
                        170,
                        400,
                        326,
                        399,
                        327,
                        422,
                        171,
                        422
                     ],
                     "text": "OPODATKOWANA"
                  },
                  {
                     "boundingBox": [
                        336,
                        400,
                        350,
                        400,
                        350,
                        422,
                        336,
                        422
                     ],
                     "text": "B"
                  }
               ]
            },
            {
               "boundingBox": [
                  514,
                  400,
                  568,
                  400,
                  568,
                  421,
                  514,
                  421
               ],
               "text": "6, 29",
               "words": [
                  {
                     "boundingBox": [
                        516,
                        400,
                        540,
                        400,
                        540,
                        421,
                        516,
                        421
                     ],
                     "text": "6,"
                  },
                  {
                     "boundingBox": [
                        544,
                        400,
                        567,
                        400,
                        567,
                        421,
                        544,
                        421
                     ],
                     "text": "29"
                  }
               ]
            },
            {
               "boundingBox": [
                  53,
                  427,
                  208,
                  426,
                  209,
                  449,
                  54,
                  449
               ],
               "text": "PTU B 8,00 %",
               "words": [
                  {
                     "boundingBox": [
                        56,
                        428,
                        94,
                        427,
                        94,
                        449,
                        55,
                        449
                     ],
                     "text": "PTU"
                  },
                  {
                     "boundingBox": [
                        107,
                        427,
                        121,
                        427,
                        121,
                        449,
                        107,
                        449
                     ],
                     "text": "B"
                  },
                  {
                     "boundingBox": [
                        133,
                        427,
                        185,
                        427,
                        185,
                        449,
                        132,
                        449
                     ],
                     "text": "8,00"
                  },
                  {
                     "boundingBox": [
                        198,
                        428,
                        210,
                        428,
                        209,
                        450,
                        198,
                        450
                     ],
                     "text": "%"
                  }
               ]
            },
            {
               "boundingBox": [
                  53,
                  454,
                  159,
                  453,
                  160,
                  474,
                  54,
                  475
               ],
               "text": "SUMA PTU",
               "words": [
                  {
                     "boundingBox": [
                        57,
                        454,
                        110,
                        454,
                        109,
                        475,
                        57,
                        476
                     ],
                     "text": "SUMA"
                  },
                  {
                     "boundingBox": [
                        120,
                        454,
                        159,
                        454,
                        159,
                        474,
                        119,
                        475
                     ],
                     "text": "PTU"
                  }
               ]
            },
            {
               "boundingBox": [
                  512,
                  425,
                  569,
                  424,
                  569,
                  452,
                  512,
                  453
               ],
               "text": "0, 47",
               "words": [
                  {
                     "boundingBox": [
                        515,
                        424,
                        539,
                        424,
                        539,
                        452,
                        515,
                        452
                     ],
                     "text": "0,"
                  },
                  {
                     "boundingBox": [
                        545,
                        424,
                        567,
                        424,
                        567,
                        452,
                        545,
                        452
                     ],
                     "text": "47"
                  }
               ]
            },
            {
               "boundingBox": [
                  514,
                  451,
                  568,
                  452,
                  568,
                  475,
                  513,
                  474
               ],
               "text": "0,47",
               "words": [
                  {
                     "boundingBox": [
                        517,
                        451,
                        566,
                        451,
                        566,
                        474,
                        517,
                        474
                     ],
                     "text": "0,47"
                  }
               ]
            },
            {
               "boundingBox": [
                  56,
                  480,
                  261,
                  480,
                  260,
                  521,
                  55,
                  520
               ],
               "text": "SUMA PLN",
               "words": [
                  {
                     "boundingBox": [
                        58,
                        480,
                        162,
                        481,
                        163,
                        521,
                        59,
                        520
                     ],
                     "text": "SUMA"
                  },
                  {
                     "boundingBox": [
                        184,
                        481,
                        261,
                        481,
                        261,
                        520,
                        184,
                        521
                     ],
                     "text": "PLN"
                  }
               ]
            },
            {
               "boundingBox": [
                  465,
                  479,
                  568,
                  480,
                  567,
                  523,
                  465,
                  521
               ],
               "text": "6,29",
               "words": [
                  {
                     "boundingBox": [
                        467,
                        478,
                        565,
                        479,
                        564,
                        522,
                        467,
                        521
                     ],
                     "text": "6,29"
                  }
               ]
            },
            {
               "boundingBox": [
                  54,
                  524,
                  405,
                  523,
                  406,
                  548,
                  55,
                  549
               ],
               "text": "00373 #Kasa 21 Kasjer hr 28",
               "words": [
                  {
                     "boundingBox": [
                        56,
                        526,
                        122,
                        526,
                        121,
                        549,
                        55,
                        548
                     ],
                     "text": "00373"
                  },
                  {
                     "boundingBox": [
                        134,
                        526,
                        200,
                        526,
                        199,
                        549,
                        133,
                        549
                     ],
                     "text": "#Kasa"
                  },
                  {
                     "boundingBox": [
                        211,
                        525,
                        240,
                        525,
                        239,
                        549,
                        210,
                        549
                     ],
                     "text": "21"
                  },
                  {
                     "boundingBox": [
                        247,
                        525,
                        326,
                        524,
                        325,
                        549,
                        246,
                        549
                     ],
                     "text": "Kasjer"
                  },
                  {
                     "boundingBox": [
                        338,
                        524,
                        365,
                        524,
                        364,
                        549,
                        337,
                        549
                     ],
                     "text": "hr",
                     "confidence": "Low"
                  },
                  {
                     "boundingBox": [
                        378,
                        524,
                        405,
                        523,
                        404,
                        548,
                        377,
                        548
                     ],
                     "text": "28"
                  }
               ]
            },
            {
               "boundingBox": [
                  358,
                  550,
                  567,
                  549,
                  568,
                  573,
                  359,
                  574
               ],
               "text": "2019-05-29 15:57",
               "words": [
                  {
                     "boundingBox": [
                        364,
                        550,
                        495,
                        550,
                        494,
                        574,
                        364,
                        574
                     ],
                     "text": "2019-05-29"
                  },
                  {
                     "boundingBox": [
                        506,
                        550,
                        567,
                        550,
                        566,
                        573,
                        505,
                        574
                     ],
                     "text": "15:57"
                  }
               ]
            },
            {
               "boundingBox": [
                  55,
                  577,
                  568,
                  576,
                  569,
                  599,
                  56,
                  601
               ],
               "text": "706AGEEB55D362A47A4758025560A34C1DF2FE40",
               "words": [
                  {
                     "boundingBox": [
                        59,
                        579,
                        569,
                        577,
                        569,
                        600,
                        59,
                        601
                     ],
                     "text": "706AGEEB55D362A47A4758025560A34C1DF2FE40",
                     "confidence": "Low"
                  }
               ]
            },
            {
               "boundingBox": [
                  196,
                  603,
                  426,
                  602,
                  427,
                  626,
                  197,
                  627
               ],
               "text": "7 CBR 1601311062",
               "words": [
                  {
                     "boundingBox": [
                        200,
                        603,
                        217,
                        603,
                        215,
                        628,
                        199,
                        628
                     ],
                     "text": "7",
                     "confidence": "Low"
                  },
                  {
                     "boundingBox": [
                        248,
                        603,
                        289,
                        603,
                        288,
                        627,
                        246,
                        627
                     ],
                     "text": "CBR"
                  },
                  {
                     "boundingBox": [
                        302,
                        603,
                        426,
                        603,
                        425,
                        626,
                        301,
                        627
                     ],
                     "text": "1601311062"
                  }
               ]
            },
            {
               "boundingBox": [
                  231,
                  631,
                  388,
                  629,
                  389,
                  652,
                  232,
                  655
               ],
               "text": "Nr sys. 7055",
               "words": [
                  {
                     "boundingBox": [
                        234,
                        632,
                        261,
                        632,
                        261,
                        654,
                        233,
                        654
                     ],
                     "text": "Nr"
                  },
                  {
                     "boundingBox": [
                        274,
                        632,
                        331,
                        631,
                        330,
                        654,
                        274,
                        654
                     ],
                     "text": "sys."
                  },
                  {
                     "boundingBox": [
                        341,
                        631,
                        388,
                        630,
                        388,
                        654,
                        340,
                        654
                     ],
                     "text": "7055"
                  }
               ]
            },
            {
               "boundingBox": [
                  52,
                  657,
                  289,
                  656,
                  290,
                  680,
                  53,
                  681
               ],
               "text": "Karta Visa Debit B",
               "words": [
                  {
                     "boundingBox": [
                        55,
                        658,
                        123,
                        657,
                        123,
                        681,
                        55,
                        681
                     ],
                     "text": "Karta"
                  },
                  {
                     "boundingBox": [
                        133,
                        657,
                        186,
                        657,
                        186,
                        681,
                        133,
                        681
                     ],
                     "text": "Visa"
                  },
                  {
                     "boundingBox": [
                        197,
                        657,
                        266,
                        657,
                        266,
                        680,
                        197,
                        681
                     ],
                     "text": "Debit"
                  },
                  {
                     "boundingBox": [
                        274,
                        657,
                        288,
                        657,
                        288,
                        680,
                        274,
                        680
                     ],
                     "text": "B"
                  }
               ]
            },
            {
               "boundingBox": [
                  463,
                  656,
                  569,
                  655,
                  570,
                  677,
                  464,
                  678
               ],
               "text": "6,29 PLN",
               "words": [
                  {
                     "boundingBox": [
                        465,
                        657,
                        519,
                        656,
                        518,
                        679,
                        466,
                        678
                     ],
                     "text": "6,29"
                  },
                  {
                     "boundingBox": [
                        530,
                        656,
                        569,
                        656,
                        568,
                        679,
                        529,
                        679
                     ],
                     "text": "PLN"
                  }
               ]
            },
            {
               "boundingBox": [
                  54,
                  683,
                  383,
                  682,
                  384,
                  706,
                  55,
                  707
               ],
               "text": "Udzielono tacanie rabatow:",
               "words": [
                  {
                     "boundingBox": [
                        55,
                        684,
                        173,
                        683,
                        173,
                        708,
                        55,
                        707
                     ],
                     "text": "Udzielono"
                  },
                  {
                     "boundingBox": [
                        187,
                        683,
                        276,
                        683,
                        276,
                        707,
                        187,
                        708
                     ],
                     "text": "tacanie",
                     "confidence": "Low"
                  },
                  {
                     "boundingBox": [
                        285,
                        683,
                        384,
                        684,
                        383,
                        706,
                        285,
                        707
                     ],
                     "text": "rabatow:"
                  }
               ]
            },
            {
               "boundingBox": [
                  516,
                  683,
                  569,
                  683,
                  569,
                  704,
                  516,
                  705
               ],
               "text": "0, 70",
               "words": [
                  {
                     "boundingBox": [
                        517,
                        682,
                        542,
                        682,
                        542,
                        704,
                        517,
                        704
                     ],
                     "text": "0,"
                  },
                  {
                     "boundingBox": [
                        546,
                        682,
                        568,
                        682,
                        568,
                        704,
                        546,
                        704
                     ],
                     "text": "70"
                  }
               ]
            },
            {
               "boundingBox": [
                  181,
                  708,
                  448,
                  709,
                  447,
                  734,
                  181,
                  734
               ],
               "text": "Dziekujemy za zakupy .",
               "words": [
                  {
                     "boundingBox": [
                        183,
                        710,
                        316,
                        709,
                        316,
                        735,
                        183,
                        734
                     ],
                     "text": "Dziekujemy"
                  },
                  {
                     "boundingBox": [
                        326,
                        709,
                        354,
                        710,
                        354,
                        735,
                        325,
                        735
                     ],
                     "text": "za"
                  },
                  {
                     "boundingBox": [
                        364,
                        710,
                        439,
                        711,
                        439,
                        735,
                        364,
                        735
                     ],
                     "text": "zakupy"
                  },
                  {
                     "boundingBox": [
                        444,
                        711,
                        447,
                        711,
                        447,
                        735,
                        444,
                        735
                     ],
                     "text": "."
                  }
               ]
            }
         ]
      };

   public processImageWithOcr(image: File): Observable<any> {
      let subject = new Subject<IOcrRecognitionResult>();

      setTimeout(() => {
         subject.next(this.returnData as IOcrRecognitionResult);
      }, 1000);


      return subject.asObservable();
   }

}