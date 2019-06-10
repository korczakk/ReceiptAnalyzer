import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { AzureOcrServiceBase } from '../interfaces/AzureOcrServiceBase';
import { OcrRecognitionResult } from '../interfaces/ocr-recognition-result';


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
               34,
               0,
               131,
               0,
               130,
               18,
               33,
               17
            ],
            "text": "2017-07-01",
            "words": [
               {
                  "boundingBox": [
                     37,
                     0,
                     131,
                     0,
                     130,
                     19,
                     37,
                     17
                  ],
                  "text": "2017-07-01"
               }
            ]
         },
         {
            "boundingBox": [
               363,
               4,
               424,
               6,
               423,
               23,
               362,
               21
            ],
            "text": "196469",
            "words": [
               {
                  "boundingBox": [
                     364,
                     6,
                     422,
                     6,
                     422,
                     23,
                     364,
                     23
                  ],
                  "text": "196469"
               }
            ]
         },
         {
            "boundingBox": [
               148,
               20,
               302,
               23,
               301,
               42,
               148,
               39
            ],
            "text": "PARAGON FISKALNY",
            "words": [
               {
                  "boundingBox": [
                     150,
                     21,
                     219,
                     22,
                     218,
                     39,
                     149,
                     39
                  ],
                  "text": "PARAGON"
               },
               {
                  "boundingBox": [
                     226,
                     23,
                     302,
                     24,
                     301,
                     42,
                     225,
                     39
                  ],
                  "text": "FISKALNY"
               }
            ]
         },
         {
            "boundingBox": [
               33,
               36,
               217,
               42,
               216,
               59,
               32,
               54
            ],
            "text": "SMILE MAKERS \"FRANA",
            "words": [
               {
                  "boundingBox": [
                     34,
                     38,
                     82,
                     39,
                     81,
                     55,
                     34,
                     54
                  ],
                  "text": "SMILE"
               },
               {
                  "boundingBox": [
                     91,
                     39,
                     152,
                     41,
                     151,
                     58,
                     90,
                     56
                  ],
                  "text": "MAKERS"
               },
               {
                  "boundingBox": [
                     161,
                     41,
                     217,
                     43,
                     215,
                     60,
                     160,
                     58
                  ],
                  "text": "\"FRANA",
                  "confidence": "Low"
               }
            ]
         },
         {
            "boundingBox": [
               292,
               43,
               420,
               44,
               419,
               63,
               291,
               62
            ],
            "text": "1 x0. 01 0.01A",
            "words": [
               {
                  "boundingBox": [
                     295,
                     44,
                     307,
                     44,
                     307,
                     62,
                     295,
                     62
                  ],
                  "text": "1"
               },
               {
                  "boundingBox": [
                     312,
                     44,
                     337,
                     44,
                     337,
                     63,
                     311,
                     62
                  ],
                  "text": "x0.",
                  "confidence": "Low"
               },
               {
                  "boundingBox": [
                     341,
                     44,
                     365,
                     44,
                     364,
                     63,
                     340,
                     63
                  ],
                  "text": "01"
               },
               {
                  "boundingBox": [
                     370,
                     44,
                     419,
                     45,
                     418,
                     64,
                     369,
                     63
                  ],
                  "text": "0.01A",
                  "confidence": "Low"
               }
            ]
         },
         {
            "boundingBox": [
               32,
               57,
               217,
               61,
               216,
               79,
               31,
               74
            ],
            "text": "SMILE MAKERS \"FRANA",
            "words": [
               {
                  "boundingBox": [
                     34,
                     58,
                     83,
                     59,
                     82,
                     76,
                     33,
                     74
                  ],
                  "text": "SMILE"
               },
               {
                  "boundingBox": [
                     92,
                     59,
                     152,
                     60,
                     152,
                     78,
                     91,
                     76
                  ],
                  "text": "MAKERS"
               },
               {
                  "boundingBox": [
                     161,
                     60,
                     217,
                     62,
                     216,
                     79,
                     160,
                     78
                  ],
                  "text": "\"FRANA",
                  "confidence": "Low"
               }
            ]
         },
         {
            "boundingBox": [
               32,
               76,
               216,
               81,
               215,
               99,
               31,
               94
            ],
            "text": "SMILE MAKERS \"FRAVA",
            "words": [
               {
                  "boundingBox": [
                     34,
                     77,
                     83,
                     79,
                     83,
                     95,
                     34,
                     94
                  ],
                  "text": "SMILE"
               },
               {
                  "boundingBox": [
                     91,
                     79,
                     152,
                     80,
                     152,
                     97,
                     90,
                     96
                  ],
                  "text": "MAKERS"
               },
               {
                  "boundingBox": [
                     161,
                     81,
                     216,
                     82,
                     215,
                     99,
                     161,
                     97
                  ],
                  "text": "\"FRAVA",
                  "confidence": "Low"
               }
            ]
         },
         {
            "boundingBox": [
               292,
               63,
               418,
               65,
               417,
               84,
               291,
               81
            ],
            "text": "1 x0, 01 0,01A",
            "words": [
               {
                  "boundingBox": [
                     294,
                     64,
                     306,
                     64,
                     306,
                     82,
                     294,
                     82
                  ],
                  "text": "1"
               },
               {
                  "boundingBox": [
                     311,
                     64,
                     336,
                     65,
                     336,
                     82,
                     311,
                     82
                  ],
                  "text": "x0,",
                  "confidence": "Low"
               },
               {
                  "boundingBox": [
                     340,
                     65,
                     363,
                     65,
                     362,
                     82,
                     339,
                     82
                  ],
                  "text": "01"
               },
               {
                  "boundingBox": [
                     368,
                     65,
                     417,
                     66,
                     416,
                     84,
                     368,
                     82
                  ],
                  "text": "0,01A",
                  "confidence": "Low"
               }
            ]
         },
         {
            "boundingBox": [
               30,
               95,
               216,
               101,
               215,
               119,
               29,
               113
            ],
            "text": "ISANA DEO SPRAY AVA",
            "words": [
               {
                  "boundingBox": [
                     33,
                     96,
                     84,
                     98,
                     83,
                     115,
                     32,
                     113
                  ],
                  "text": "ISANA"
               },
               {
                  "boundingBox": [
                     90,
                     98,
                     122,
                     99,
                     121,
                     116,
                     90,
                     115
                  ],
                  "text": "DEO"
               },
               {
                  "boundingBox": [
                     131,
                     99,
                     180,
                     101,
                     179,
                     118,
                     130,
                     117
                  ],
                  "text": "SPRAY"
               },
               {
                  "boundingBox": [
                     188,
                     101,
                     216,
                     101,
                     215,
                     119,
                     187,
                     118
                  ],
                  "text": "AVA",
                  "confidence": "Low"
               }
            ]
         },
         {
            "boundingBox": [
               291,
               83,
               417,
               85,
               416,
               103,
               290,
               101
            ],
            "text": "1 x0 , 01 0, 01A",
            "words": [
               {
                  "boundingBox": [
                     293,
                     85,
                     304,
                     85,
                     304,
                     102,
                     293,
                     102
                  ],
                  "text": "1"
               },
               {
                  "boundingBox": [
                     311,
                     85,
                     329,
                     85,
                     328,
                     102,
                     310,
                     102
                  ],
                  "text": "x0"
               },
               {
                  "boundingBox": [
                     332,
                     85,
                     335,
                     85,
                     335,
                     102,
                     331,
                     102
                  ],
                  "text": ",",
                  "confidence": "Low"
               },
               {
                  "boundingBox": [
                     339,
                     85,
                     362,
                     85,
                     361,
                     102,
                     338,
                     102
                  ],
                  "text": "01"
               },
               {
                  "boundingBox": [
                     368,
                     85,
                     384,
                     85,
                     383,
                     103,
                     367,
                     102
                  ],
                  "text": "0,",
                  "confidence": "Low"
               },
               {
                  "boundingBox": [
                     388,
                     85,
                     417,
                     86,
                     415,
                     104,
                     387,
                     103
                  ],
                  "text": "01A"
               }
            ]
         },
         {
            "boundingBox": [
               289,
               101,
               417,
               104,
               416,
               123,
               288,
               120
            ],
            "text": "1 x3,99 3.99A",
            "words": [
               {
                  "boundingBox": [
                     293,
                     102,
                     306,
                     103,
                     305,
                     120,
                     292,
                     120
                  ],
                  "text": "1"
               },
               {
                  "boundingBox": [
                     310,
                     103,
                     361,
                     104,
                     360,
                     122,
                     309,
                     121
                  ],
                  "text": "x3,99",
                  "confidence": "Low"
               },
               {
                  "boundingBox": [
                     368,
                     104,
                     417,
                     105,
                     416,
                     123,
                     367,
                     122
                  ],
                  "text": "3.99A",
                  "confidence": "Low"
               }
            ]
         },
         {
            "boundingBox": [
               29,
               115,
               161,
               120,
               160,
               139,
               28,
               134
            ],
            "text": "Uwzgl . rabat :",
            "words": [
               {
                  "boundingBox": [
                     30,
                     116,
                     80,
                     118,
                     79,
                     136,
                     28,
                     134
                  ],
                  "text": "Uwzgl"
               },
               {
                  "boundingBox": [
                     84,
                     118,
                     96,
                     119,
                     95,
                     136,
                     83,
                     136
                  ],
                  "text": "."
               },
               {
                  "boundingBox": [
                     101,
                     119,
                     148,
                     120,
                     147,
                     139,
                     100,
                     136
                  ],
                  "text": "rabat"
               },
               {
                  "boundingBox": [
                     152,
                     120,
                     161,
                     120,
                     160,
                     139,
                     150,
                     139
                  ],
                  "text": ":"
               }
            ]
         },
         {
            "boundingBox": [
               28,
               134,
               215,
               139,
               214,
               159,
               27,
               154
            ],
            "text": "ISANA DEO SPRAY F\\A",
            "words": [
               {
                  "boundingBox": [
                     30,
                     135,
                     83,
                     137,
                     82,
                     155,
                     30,
                     153
                  ],
                  "text": "ISANA"
               },
               {
                  "boundingBox": [
                     90,
                     137,
                     121,
                     138,
                     121,
                     156,
                     89,
                     155
                  ],
                  "text": "DEO"
               },
               {
                  "boundingBox": [
                     130,
                     138,
                     180,
                     139,
                     179,
                     158,
                     129,
                     157
                  ],
                  "text": "SPRAY"
               },
               {
                  "boundingBox": [
                     186,
                     139,
                     215,
                     140,
                     214,
                     158,
                     185,
                     158
                  ],
                  "text": "F\\A"
               }
            ]
         },
         {
            "boundingBox": [
               196,
               120,
               349,
               123,
               348,
               141,
               195,
               138
            ],
            "text": "-1,00st . c 4,99",
            "words": [
               {
                  "boundingBox": [
                     197,
                     121,
                     261,
                     123,
                     261,
                     140,
                     197,
                     138
                  ],
                  "text": "-1,00st",
                  "confidence": "Low"
               },
               {
                  "boundingBox": [
                     265,
                     123,
                     269,
                     123,
                     269,
                     140,
                     264,
                     140
                  ],
                  "text": "."
               },
               {
                  "boundingBox": [
                     272,
                     123,
                     283,
                     123,
                     283,
                     140,
                     272,
                     140
                  ],
                  "text": "c"
               },
               {
                  "boundingBox": [
                     312,
                     123,
                     348,
                     123,
                     348,
                     141,
                     311,
                     141
                  ],
                  "text": "4,99",
                  "confidence": "Low"
               }
            ]
         },
         {
            "boundingBox": [
               26,
               155,
               159,
               160,
               158,
               178,
               26,
               174
            ],
            "text": "Uwzgl . rabat:",
            "words": [
               {
                  "boundingBox": [
                     28,
                     156,
                     79,
                     158,
                     78,
                     175,
                     28,
                     174
                  ],
                  "text": "Uwzgl"
               },
               {
                  "boundingBox": [
                     82,
                     158,
                     95,
                     158,
                     94,
                     176,
                     82,
                     176
                  ],
                  "text": "."
               },
               {
                  "boundingBox": [
                     98,
                     159,
                     159,
                     160,
                     159,
                     178,
                     98,
                     176
                  ],
                  "text": "rabat:"
               }
            ]
         },
         {
            "boundingBox": [
               290,
               142,
               416,
               143,
               415,
               162,
               289,
               161
            ],
            "text": "1 x3, 99 3.99A",
            "words": [
               {
                  "boundingBox": [
                     292,
                     143,
                     303,
                     143,
                     303,
                     161,
                     292,
                     161
                  ],
                  "text": "1"
               },
               {
                  "boundingBox": [
                     310,
                     143,
                     335,
                     143,
                     334,
                     161,
                     310,
                     161
                  ],
                  "text": "x3,",
                  "confidence": "Low"
               },
               {
                  "boundingBox": [
                     338,
                     143,
                     361,
                     143,
                     360,
                     162,
                     338,
                     161
                  ],
                  "text": "99"
               },
               {
                  "boundingBox": [
                     369,
                     143,
                     416,
                     144,
                     415,
                     163,
                     368,
                     162
                  ],
                  "text": "3.99A",
                  "confidence": "Low"
               }
            ]
         },
         {
            "boundingBox": [
               196,
               159,
               350,
               162,
               349,
               180,
               195,
               177
            ],
            "text": "-1,00st .c 4.99",
            "words": [
               {
                  "boundingBox": [
                     196,
                     160,
                     261,
                     161,
                     260,
                     179,
                     196,
                     177
                  ],
                  "text": "-1,00st",
                  "confidence": "Low"
               },
               {
                  "boundingBox": [
                     264,
                     161,
                     283,
                     161,
                     283,
                     179,
                     264,
                     179
                  ],
                  "text": ".c",
                  "confidence": "Low"
               },
               {
                  "boundingBox": [
                     311,
                     162,
                     350,
                     163,
                     349,
                     180,
                     311,
                     180
                  ],
                  "text": "4.99",
                  "confidence": "Low"
               }
            ]
         },
         {
            "boundingBox": [
               25,
               175,
               215,
               178,
               214,
               197,
               24,
               194
            ],
            "text": "DUREX SELECT 3SZTAB",
            "words": [
               {
                  "boundingBox": [
                     27,
                     177,
                     80,
                     177,
                     79,
                     195,
                     26,
                     193
                  ],
                  "text": "DUREX"
               },
               {
                  "boundingBox": [
                     89,
                     177,
                     149,
                     178,
                     149,
                     196,
                     88,
                     195
                  ],
                  "text": "SELECT"
               },
               {
                  "boundingBox": [
                     158,
                     178,
                     215,
                     179,
                     214,
                     197,
                     157,
                     196
                  ],
                  "text": "3SZTAB",
                  "confidence": "Low"
               }
            ]
         },
         {
            "boundingBox": [
               25,
               195,
               214,
               198,
               214,
               217,
               24,
               214
            ],
            "text": "DUREX SELECT 3SZTAB",
            "words": [
               {
                  "boundingBox": [
                     26,
                     197,
                     78,
                     198,
                     78,
                     214,
                     26,
                     213
                  ],
                  "text": "DUREX"
               },
               {
                  "boundingBox": [
                     88,
                     198,
                     149,
                     198,
                     149,
                     216,
                     88,
                     215
                  ],
                  "text": "SELECT"
               },
               {
                  "boundingBox": [
                     158,
                     198,
                     214,
                     199,
                     214,
                     217,
                     158,
                     216
                  ],
                  "text": "3SZTAB",
                  "confidence": "Low"
               }
            ]
         },
         {
            "boundingBox": [
               288,
               181,
               414,
               183,
               413,
               202,
               288,
               200
            ],
            "text": "1 x0. 01 0,01B",
            "words": [
               {
                  "boundingBox": [
                     292,
                     182,
                     304,
                     182,
                     303,
                     200,
                     291,
                     200
                  ],
                  "text": "1"
               },
               {
                  "boundingBox": [
                     310,
                     182,
                     334,
                     183,
                     333,
                     201,
                     309,
                     200
                  ],
                  "text": "x0.",
                  "confidence": "Low"
               },
               {
                  "boundingBox": [
                     338,
                     183,
                     361,
                     183,
                     360,
                     201,
                     337,
                     201
                  ],
                  "text": "01"
               },
               {
                  "boundingBox": [
                     367,
                     184,
                     414,
                     184,
                     413,
                     202,
                     366,
                     201
                  ],
                  "text": "0,01B",
                  "confidence": "Low"
               }
            ]
         },
         {
            "boundingBox": [
               289,
               201,
               414,
               203,
               413,
               221,
               288,
               218
            ],
            "text": "1 x0, 01 0. 01B",
            "words": [
               {
                  "boundingBox": [
                     292,
                     202,
                     302,
                     202,
                     302,
                     219,
                     291,
                     218
                  ],
                  "text": "1"
               },
               {
                  "boundingBox": [
                     309,
                     202,
                     334,
                     203,
                     333,
                     220,
                     309,
                     219
                  ],
                  "text": "x0,"
               },
               {
                  "boundingBox": [
                     337,
                     203,
                     360,
                     203,
                     359,
                     220,
                     337,
                     220
                  ],
                  "text": "01"
               },
               {
                  "boundingBox": [
                     366,
                     203,
                     383,
                     203,
                     382,
                     221,
                     366,
                     220
                  ],
                  "text": "0.",
                  "confidence": "Low"
               },
               {
                  "boundingBox": [
                     386,
                     204,
                     414,
                     204,
                     413,
                     221,
                     385,
                     221
                  ],
                  "text": "01B"
               }
            ]
         },
         {
            "boundingBox": [
               23,
               215,
               214,
               218,
               213,
               236,
               22,
               233
            ],
            "text": "OLD SPICE DEO SZTVA",
            "words": [
               {
                  "boundingBox": [
                     25,
                     216,
                     57,
                     217,
                     56,
                     234,
                     24,
                     234
                  ],
                  "text": "OLD"
               },
               {
                  "boundingBox": [
                     67,
                     217,
                     118,
                     218,
                     118,
                     235,
                     67,
                     234
                  ],
                  "text": "SPICE"
               },
               {
                  "boundingBox": [
                     126,
                     218,
                     157,
                     218,
                     157,
                     236,
                     126,
                     235
                  ],
                  "text": "DEO"
               },
               {
                  "boundingBox": [
                     166,
                     219,
                     213,
                     219,
                     213,
                     236,
                     166,
                     236
                  ],
                  "text": "SZTVA",
                  "confidence": "Low"
               }
            ]
         },
         {
            "boundingBox": [
               288,
               219,
               415,
               222,
               414,
               241,
               287,
               237
            ],
            "text": "1 x9 , 59 9.59A",
            "words": [
               {
                  "boundingBox": [
                     291,
                     221,
                     302,
                     221,
                     302,
                     238,
                     291,
                     238
                  ],
                  "text": "1"
               },
               {
                  "boundingBox": [
                     308,
                     221,
                     326,
                     221,
                     326,
                     239,
                     308,
                     239
                  ],
                  "text": "x9"
               },
               {
                  "boundingBox": [
                     330,
                     221,
                     334,
                     221,
                     334,
                     239,
                     329,
                     239
                  ],
                  "text": ",",
                  "confidence": "Low"
               },
               {
                  "boundingBox": [
                     338,
                     221,
                     359,
                     222,
                     359,
                     240,
                     337,
                     239
                  ],
                  "text": "59"
               },
               {
                  "boundingBox": [
                     366,
                     222,
                     415,
                     224,
                     414,
                     241,
                     365,
                     240
                  ],
                  "text": "9.59A",
                  "confidence": "Low"
               }
            ]
         },
         {
            "boundingBox": [
               22,
               237,
               153,
               237,
               152,
               256,
               21,
               255
            ],
            "text": "Uwzgl . rabat :",
            "words": [
               {
                  "boundingBox": [
                     24,
                     237,
                     75,
                     238,
                     74,
                     256,
                     23,
                     256
                  ],
                  "text": "Uwzgl"
               },
               {
                  "boundingBox": [
                     78,
                     238,
                     91,
                     238,
                     91,
                     256,
                     78,
                     256
                  ],
                  "text": "."
               },
               {
                  "boundingBox": [
                     95,
                     238,
                     145,
                     239,
                     144,
                     256,
                     94,
                     256
                  ],
                  "text": "rabat"
               },
               {
                  "boundingBox": [
                     149,
                     239,
                     152,
                     239,
                     152,
                     257,
                     148,
                     256
                  ],
                  "text": ":"
               }
            ]
         },
         {
            "boundingBox": [
               192,
               237,
               346,
               241,
               345,
               259,
               191,
               255
            ],
            "text": "-2,40st .c 11,99",
            "words": [
               {
                  "boundingBox": [
                     195,
                     238,
                     260,
                     240,
                     259,
                     257,
                     195,
                     255
                  ],
                  "text": "-2,40st",
                  "confidence": "Low"
               },
               {
                  "boundingBox": [
                     263,
                     240,
                     281,
                     240,
                     281,
                     257,
                     263,
                     257
                  ],
                  "text": ".c"
               },
               {
                  "boundingBox": [
                     301,
                     240,
                     346,
                     241,
                     346,
                     259,
                     301,
                     258
                  ],
                  "text": "11,99"
               }
            ]
         },
         {
            "boundingBox": [
               19,
               278,
               212,
               277,
               213,
               297,
               20,
               298
            ],
            "text": "SPRZEDAZ OPODATK. A",
            "words": [
               {
                  "boundingBox": [
                     22,
                     278,
                     108,
                     278,
                     108,
                     296,
                     22,
                     298
                  ],
                  "text": "SPRZEDAZ"
               },
               {
                  "boundingBox": [
                     115,
                     278,
                     198,
                     278,
                     198,
                     297,
                     114,
                     296
                  ],
                  "text": "OPODATK."
               },
               {
                  "boundingBox": [
                     202,
                     278,
                     212,
                     278,
                     212,
                     297,
                     202,
                     297
                  ],
                  "text": "A"
               }
            ]
         },
         {
            "boundingBox": [
               365,
               281,
               416,
               283,
               415,
               301,
               364,
               299
            ],
            "text": "17,60",
            "words": [
               {
                  "boundingBox": [
                     367,
                     282,
                     414,
                     283,
                     413,
                     301,
                     367,
                     299
                  ],
                  "text": "17,60"
               }
            ]
         },
         {
            "boundingBox": [
               18,
               299,
               153,
               298,
               154,
               317,
               19,
               318
            ],
            "text": "PTU A 23,00 %",
            "words": [
               {
                  "boundingBox": [
                     20,
                     299,
                     53,
                     299,
                     53,
                     318,
                     20,
                     318
                  ],
                  "text": "PTU"
               },
               {
                  "boundingBox": [
                     63,
                     299,
                     75,
                     299,
                     75,
                     318,
                     62,
                     318
                  ],
                  "text": "A"
               },
               {
                  "boundingBox": [
                     84,
                     299,
                     137,
                     299,
                     137,
                     318,
                     84,
                     318
                  ],
                  "text": "23,00",
                  "confidence": "Low"
               },
               {
                  "boundingBox": [
                     145,
                     299,
                     155,
                     299,
                     154,
                     318,
                     144,
                     318
                  ],
                  "text": "%",
                  "confidence": "Low"
               }
            ]
         },
         {
            "boundingBox": [
               373,
               303,
               415,
               303,
               415,
               321,
               373,
               320
            ],
            "text": "3,29",
            "words": [
               {
                  "boundingBox": [
                     376,
                     302,
                     414,
                     302,
                     414,
                     320,
                     376,
                     320
                  ],
                  "text": "3,29",
                  "confidence": "Low"
               }
            ]
         },
         {
            "boundingBox": [
               20,
               319,
               211,
               318,
               212,
               337,
               21,
               338
            ],
            "text": "SPRZEDAZ OPODATK. B",
            "words": [
               {
                  "boundingBox": [
                     23,
                     320,
                     105,
                     319,
                     105,
                     338,
                     22,
                     338
                  ],
                  "text": "SPRZEDAZ",
                  "confidence": "Low"
               },
               {
                  "boundingBox": [
                     112,
                     319,
                     197,
                     319,
                     196,
                     337,
                     112,
                     338
                  ],
                  "text": "OPODATK.",
                  "confidence": "Low"
               },
               {
                  "boundingBox": [
                     201,
                     319,
                     212,
                     319,
                     211,
                     337,
                     201,
                     337
                  ],
                  "text": "B"
               }
            ]
         },
         {
            "boundingBox": [
               373,
               324,
               416,
               323,
               416,
               342,
               373,
               340
            ],
            "text": "0.02",
            "words": [
               {
                  "boundingBox": [
                     375,
                     322,
                     414,
                     322,
                     414,
                     341,
                     375,
                     341
                  ],
                  "text": "0.02",
                  "confidence": "Low"
               }
            ]
         },
         {
            "boundingBox": [
               18,
               340,
               142,
               341,
               141,
               359,
               18,
               358
            ],
            "text": "PTU B 8,00 %",
            "words": [
               {
                  "boundingBox": [
                     21,
                     341,
                     53,
                     341,
                     52,
                     359,
                     20,
                     359
                  ],
                  "text": "PTU"
               },
               {
                  "boundingBox": [
                     61,
                     341,
                     72,
                     341,
                     72,
                     359,
                     60,
                     359
                  ],
                  "text": "B"
               },
               {
                  "boundingBox": [
                     82,
                     341,
                     124,
                     342,
                     124,
                     359,
                     81,
                     359
                  ],
                  "text": "8,00"
               },
               {
                  "boundingBox": [
                     132,
                     342,
                     142,
                     343,
                     142,
                     359,
                     132,
                     359
                  ],
                  "text": "%"
               }
            ]
         },
         {
            "boundingBox": [
               372,
               342,
               418,
               342,
               417,
               364,
               372,
               364
            ],
            "text": "0,00",
            "words": [
               {
                  "boundingBox": [
                     376,
                     342,
                     417,
                     342,
                     417,
                     364,
                     376,
                     364
                  ],
                  "text": "0,00"
               }
            ]
         },
         {
            "boundingBox": [
               19,
               360,
               105,
               362,
               104,
               379,
               18,
               377
            ],
            "text": "SUMA PTU",
            "words": [
               {
                  "boundingBox": [
                     21,
                     360,
                     63,
                     362,
                     62,
                     378,
                     21,
                     378
                  ],
                  "text": "SUMA"
               },
               {
                  "boundingBox": [
                     71,
                     362,
                     102,
                     364,
                     102,
                     379,
                     71,
                     378
                  ],
                  "text": "PTU"
               }
            ]
         },
         {
            "boundingBox": [
               374,
               365,
               415,
               365,
               415,
               384,
               372,
               383
            ],
            "text": "3 ,29",
            "words": [
               {
                  "boundingBox": [
                     378,
                     364,
                     385,
                     364,
                     385,
                     383,
                     378,
                     383
                  ],
                  "text": "3"
               },
               {
                  "boundingBox": [
                     389,
                     364,
                     413,
                     364,
                     413,
                     383,
                     389,
                     383
                  ],
                  "text": ",29",
                  "confidence": "Low"
               }
            ]
         },
         {
            "boundingBox": [
               19,
               381,
               181,
               382,
               180,
               416,
               18,
               414
            ],
            "text": "SUMA PLN",
            "words": [
               {
                  "boundingBox": [
                     24,
                     382,
                     105,
                     384,
                     105,
                     416,
                     24,
                     415
                  ],
                  "text": "SUMA"
               },
               {
                  "boundingBox": [
                     120,
                     384,
                     180,
                     383,
                     179,
                     416,
                     120,
                     416
                  ],
                  "text": "PLN"
               }
            ]
         },
         {
            "boundingBox": [
               320,
               383,
               415,
               387,
               415,
               421,
               319,
               417
            ],
            "text": "17, 62",
            "words": [
               {
                  "boundingBox": [
                     322,
                     383,
                     372,
                     385,
                     370,
                     419,
                     320,
                     417
                  ],
                  "text": "17,",
                  "confidence": "Low"
               },
               {
                  "boundingBox": [
                     378,
                     385,
                     415,
                     386,
                     413,
                     420,
                     377,
                     419
                  ],
                  "text": "62"
               }
            ]
         },
         {
            "boundingBox": [
               17,
               418,
               132,
               417,
               133,
               436,
               18,
               437
            ],
            "text": "00115 #0003",
            "words": [
               {
                  "boundingBox": [
                     19,
                     418,
                     73,
                     418,
                     72,
                     436,
                     19,
                     437
                  ],
                  "text": "00115"
               },
               {
                  "boundingBox": [
                     81,
                     418,
                     133,
                     418,
                     132,
                     437,
                     81,
                     436
                  ],
                  "text": "#0003"
               }
            ]
         },
         {
            "boundingBox": [
               175,
               420,
               221,
               421,
               220,
               438,
               174,
               437
            ],
            "text": "0047",
            "words": [
               {
                  "boundingBox": [
                     179,
                     420,
                     220,
                     420,
                     220,
                     437,
                     179,
                     437
                  ],
                  "text": "0047"
               }
            ]
         },
         {
            "boundingBox": [
               366,
               421,
               417,
               422,
               416,
               442,
               366,
               440
            ],
            "text": "10 52",
            "words": [
               {
                  "boundingBox": [
                     368,
                     420,
                     389,
                     421,
                     389,
                     441,
                     368,
                     440
                  ],
                  "text": "10"
               },
               {
                  "boundingBox": [
                     396,
                     421,
                     416,
                     421,
                     416,
                     441,
                     396,
                     441
                  ],
                  "text": "52",
                  "confidence": "Low"
               }
            ]
         },
         {
            "boundingBox": [
               18,
               436,
               417,
               440,
               416,
               463,
               17,
               458
            ],
            "text": "7CF582DEE8A553F 2500236786/A45E /DOCD20104",
            "words": [
               {
                  "boundingBox": [
                     21,
                     440,
                     168,
                     439,
                     167,
                     458,
                     21,
                     457
                  ],
                  "text": "7CF582DEE8A553F",
                  "confidence": "Low"
               },
               {
                  "boundingBox": [
                     171,
                     439,
                     317,
                     441,
                     316,
                     461,
                     170,
                     458
                  ],
                  "text": "2500236786/A45E",
                  "confidence": "Low"
               },
               {
                  "boundingBox": [
                     321,
                     441,
                     417,
                     443,
                     415,
                     463,
                     320,
                     461
                  ],
                  "text": "/DOCD20104",
                  "confidence": "Low"
               }
            ]
         },
         {
            "boundingBox": [
               140,
               458,
               297,
               460,
               296,
               482,
               139,
               480
            ],
            "text": "FE BCY 11192546",
            "words": [
               {
                  "boundingBox": [
                     143,
                     459,
                     164,
                     459,
                     163,
                     481,
                     141,
                     481
                  ],
                  "text": "FE"
               },
               {
                  "boundingBox": [
                     178,
                     460,
                     214,
                     460,
                     213,
                     482,
                     177,
                     481
                  ],
                  "text": "BCY"
               },
               {
                  "boundingBox": [
                     221,
                     460,
                     296,
                     461,
                     296,
                     482,
                     220,
                     482
                  ],
                  "text": "11192546"
               }
            ]
         },
         {
            "boundingBox": [
               13,
               501,
               210,
               504,
               209,
               527,
               12,
               524
            ],
            "text": "Inna Karta platnicz",
            "words": [
               {
                  "boundingBox": [
                     15,
                     502,
                     60,
                     503,
                     59,
                     524,
                     14,
                     525
                  ],
                  "text": "Inna"
               },
               {
                  "boundingBox": [
                     65,
                     503,
                     120,
                     504,
                     119,
                     525,
                     64,
                     524
                  ],
                  "text": "Karta"
               },
               {
                  "boundingBox": [
                     125,
                     504,
                     209,
                     505,
                     208,
                     527,
                     124,
                     525
                  ],
                  "text": "platnicz"
               }
            ]
         },
         {
            "boundingBox": [
               327,
               504,
               419,
               506,
               418,
               527,
               326,
               525
            ],
            "text": "17,62 PLN",
            "words": [
               {
                  "boundingBox": [
                     329,
                     505,
                     381,
                     506,
                     381,
                     527,
                     328,
                     526
                  ],
                  "text": "17,62"
               },
               {
                  "boundingBox": [
                     385,
                     506,
                     418,
                     506,
                     418,
                     527,
                     385,
                     527
                  ],
                  "text": "PLN"
               }
            ]
         },
         {
            "boundingBox": [
               110,
               546,
               322,
               548,
               321,
               574,
               109,
               572
            ],
            "text": "Dziekujomy za zakupy",
            "words": [
               {
                  "boundingBox": [
                     112,
                     548,
                     223,
                     548,
                     222,
                     572,
                     112,
                     571
                  ],
                  "text": "Dziekujomy",
                  "confidence": "Low"
               },
               {
                  "boundingBox": [
                     227,
                     548,
                     253,
                     549,
                     252,
                     573,
                     226,
                     572
                  ],
                  "text": "za"
               },
               {
                  "boundingBox": [
                     258,
                     549,
                     322,
                     549,
                     321,
                     574,
                     257,
                     573
                  ],
                  "text": "zakupy"
               }
            ]
         }
      ]
   };

   public processImageWithOcr(image: File): Observable<any> {
      let subject = new Subject<OcrRecognitionResult>();

      setTimeout(() => {
         subject.next(this.returnData as OcrRecognitionResult);
      }, 1000);
      

      return subject.asObservable();
   }

}