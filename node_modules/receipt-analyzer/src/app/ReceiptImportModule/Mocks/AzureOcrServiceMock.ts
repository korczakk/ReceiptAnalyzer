import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { AzureOcrServiceBase } from "../interfaces/AzureOcrServiceBase";
import { IOcrRecognitionResult } from "../interfaces/iocr-recognition-result";

@Injectable()
export class AzureOcrServiceMock extends AzureOcrServiceBase {
  constructor() {
    super();
  }

  private returnData = {
    lines: [
      {
        boundingBox: [18, 27, 444, 29, 443, 72, 17, 69],
        text: "bystone transakeJi: 157390/19",
        words: [
          {
            boundingBox: [29, 27, 143, 30, 144, 70, 30, 70],
            text: "bystone",
            confidence: "Low"
          },
          {
            boundingBox: [152, 30, 305, 32, 307, 70, 153, 70],
            text: "transakeJi:",
            confidence: "Low"
          },
          {
            boundingBox: [314, 32, 442, 32, 444, 70, 316, 70],
            text: "157390/19",
            confidence: "Low"
          }
        ]
      },
      {
        boundingBox: [107, 417, 515, 422, 515, 464, 106, 459],
        text: "EURO-DELIKATESY",
        words: [
          {
            boundingBox: [109, 421, 516, 422, 515, 465, 111, 457],
            text: "EURO-DELIKATESY"
          }
        ]
      },
      {
        boundingBox: [163, 463, 439, 468, 438, 503, 162, 498],
        text: "krzysztof Gwardecki",
        words: [
          {
            boundingBox: [175, 466, 305, 467, 306, 501, 177, 497],
            text: "krzysztof"
          },
          {
            boundingBox: [311, 467, 439, 468, 438, 504, 312, 501],
            text: "Gwardecki"
          }
        ]
      },
      {
        boundingBox: [39, 499, 571, 504, 570, 545, 38, 541],
        text: "05-806 Pruszkow, ul.B.Prusa 35A lok.15",
        words: [
          {
            boundingBox: [41, 503, 128, 504, 130, 540, 43, 539],
            text: "05-806",
            confidence: "Low"
          },
          {
            boundingBox: [135, 504, 269, 506, 271, 543, 137, 541],
            text: "Pruszkow,"
          },
          {
            boundingBox: [281, 506, 425, 505, 426, 545, 282, 543],
            text: "ul.B.Prusa",
            confidence: "Low"
          },
          {
            boundingBox: [432, 505, 481, 505, 482, 545, 433, 545],
            text: "35A"
          },
          {
            boundingBox: [488, 505, 568, 504, 569, 545, 489, 545],
            text: "lok.15",
            confidence: "Low"
          }
        ]
      },
      {
        boundingBox: [175, 543, 443, 547, 442, 580, 174, 576],
        text: "NIP: 534-223-44-65",
        words: [
          {
            boundingBox: [188, 544, 250, 545, 251, 578, 189, 577],
            text: "NIP:"
          },
          {
            boundingBox: [257, 545, 442, 548, 441, 580, 257, 578],
            text: "534-223-44-65",
            confidence: "Low"
          }
        ]
      },
      {
        boundingBox: [21, 582, 171, 581, 171, 616, 22, 617],
        text: "04-07-2019",
        words: [
          {
            boundingBox: [27, 582, 170, 581, 170, 616, 28, 618],
            text: "04-07-2019"
          }
        ]
      },
      {
        boundingBox: [500, 586, 596, 584, 598, 621, 502, 620],
        text: "570542",
        words: [
          {
            boundingBox: [512, 583, 595, 583, 596, 620, 512, 620],
            text: "570542"
          }
        ]
      },
      {
        boundingBox: [89, 661, 518, 659, 519, 697, 90, 699],
        text: "PARAGON FISKALNY",
        words: [
          {
            boundingBox: [95, 663, 280, 661, 281, 699, 95, 699],
            text: "PARAGON"
          },
          {
            boundingBox: [309, 661, 515, 662, 517, 697, 310, 699],
            text: "FISKALNY"
          }
        ]
      },
      {
        boundingBox: [31, 706, 94, 705, 95, 735, 31, 736],
        text: "Nazwa",
        words: [
          {
            boundingBox: [30, 705, 92, 704, 92, 735, 30, 735],
            text: "Nazwa"
          }
        ]
      },
      {
        boundingBox: [189, 703, 340, 705, 339, 739, 189, 738],
        text: "loscxCena",
        words: [
          {
            boundingBox: [219, 705, 338, 708, 339, 737, 218, 738],
            text: "loscxCena",
            confidence: "Low"
          }
        ]
      },
      {
        boundingBox: [425, 702, 592, 699, 593, 736, 426, 739],
        text: "Hartosc PTU",
        words: [
          {
            boundingBox: [430, 706, 530, 703, 531, 738, 432, 736],
            text: "Hartosc",
            confidence: "Low"
          },
          {
            boundingBox: [551, 702, 590, 700, 591, 737, 553, 738],
            text: "PTU"
          }
        ]
      },
      {
        boundingBox: [31, 776, 593, 781, 592, 821, 30, 816],
        text: "YOUA NESTLE 1.5L NG.A 1, 00x1, 89 1,89 A",
        words: [
          {
            boundingBox: [31, 779, 84, 780, 86, 816, 33, 816],
            text: "YOUA",
            confidence: "Low"
          },
          {
            boundingBox: [91, 780, 182, 781, 184, 817, 93, 816],
            text: "NESTLE"
          },
          {
            boundingBox: [190, 781, 245, 781, 247, 818, 192, 818],
            text: "1.5L"
          },
          {
            boundingBox: [252, 782, 332, 782, 334, 819, 254, 818],
            text: "NG.A",
            confidence: "Low"
          },
          {
            boundingBox: [351, 782, 370, 782, 372, 820, 353, 819],
            text: "1,"
          },
          {
            boundingBox: [378, 782, 435, 782, 437, 820, 379, 820],
            text: "00x1,"
          },
          {
            boundingBox: [443, 782, 483, 782, 485, 821, 444, 820],
            text: "89"
          },
          {
            boundingBox: [512, 782, 570, 781, 572, 822, 514, 821],
            text: "1,89"
          },
          {
            boundingBox: [577, 781, 589, 781, 591, 822, 579, 822],
            text: "A"
          }
        ]
      },
      {
        boundingBox: [25, 811, 375, 816, 374, 855, 24, 850],
        text: "JAREX CHLEB BAL TONOWSKI . D",
        words: [
          {
            boundingBox: [30, 813, 102, 814, 103, 851, 30, 849],
            text: "JAREX"
          },
          {
            boundingBox: [109, 814, 181, 814, 182, 853, 110, 851],
            text: "CHLEB"
          },
          {
            boundingBox: [188, 814, 223, 815, 224, 854, 189, 853],
            text: "BAL"
          },
          {
            boundingBox: [230, 815, 333, 816, 334, 854, 231, 854],
            text: "TONOWSKI"
          },
          {
            boundingBox: [340, 816, 342, 816, 343, 854, 341, 854],
            text: "."
          },
          {
            boundingBox: [349, 816, 373, 816, 373, 854, 350, 854],
            text: "D"
          }
        ]
      },
      {
        boundingBox: [16, 892, 401, 891, 402, 930, 17, 931],
        text: "PINO DZIKI SAD MANGO 0. 4L . A",
        words: [
          {
            boundingBox: [24, 894, 86, 893, 88, 932, 26, 931],
            text: "PINO",
            confidence: "Low"
          },
          {
            boundingBox: [93, 893, 167, 892, 169, 931, 95, 932],
            text: "DZIKI"
          },
          {
            boundingBox: [174, 892, 221, 892, 222, 931, 176, 931],
            text: "SAD"
          },
          {
            boundingBox: [228, 892, 302, 893, 303, 930, 230, 931],
            text: "MANGO"
          },
          {
            boundingBox: [309, 893, 332, 893, 333, 930, 311, 930],
            text: "0.",
            confidence: "Low"
          },
          {
            boundingBox: [339, 893, 359, 893, 360, 930, 340, 930],
            text: "4L"
          },
          {
            boundingBox: [366, 894, 368, 894, 370, 930, 367, 930],
            text: ".",
            confidence: "Low"
          },
          {
            boundingBox: [376, 894, 400, 894, 401, 929, 377, 929],
            text: "A"
          }
        ]
      },
      {
        boundingBox: [355, 857, 596, 850, 598, 888, 357, 895],
        text: "1, 00x2, 25 2,25 0",
        words: [
          {
            boundingBox: [358, 858, 370, 857, 370, 896, 357, 896],
            text: "1,",
            confidence: "Low"
          },
          {
            boundingBox: [378, 857, 439, 856, 439, 893, 378, 895],
            text: "00x2,"
          },
          {
            boundingBox: [446, 856, 484, 855, 484, 892, 446, 893],
            text: "25"
          },
          {
            boundingBox: [512, 854, 572, 853, 573, 889, 512, 891],
            text: "2,25",
            confidence: "Low"
          },
          {
            boundingBox: [580, 853, 598, 853, 599, 888, 581, 888],
            text: "0",
            confidence: "Low"
          }
        ]
      },
      {
        boundingBox: [23, 965, 262, 968, 262, 1005, 22, 1002],
        text: "DAN NATURA 370G . D",
        words: [
          {
            boundingBox: [26, 970, 74, 968, 76, 1002, 28, 1003],
            text: "DAN"
          },
          {
            boundingBox: [80, 968, 170, 968, 171, 1003, 82, 1002],
            text: "NATURA"
          },
          {
            boundingBox: [177, 968, 227, 969, 228, 1004, 178, 1003],
            text: "370G"
          },
          {
            boundingBox: [233, 969, 238, 969, 239, 1005, 235, 1005],
            text: "."
          },
          {
            boundingBox: [244, 970, 262, 971, 263, 1006, 245, 1005],
            text: "D"
          }
        ]
      },
      {
        boundingBox: [349, 934, 478, 934, 477, 971, 348, 970],
        text: "1,00x3, 60",
        words: [
          {
            boundingBox: [351, 934, 436, 935, 438, 970, 353, 972],
            text: "1,00x3,"
          },
          {
            boundingBox: [444, 936, 476, 936, 478, 970, 446, 970],
            text: "60",
            confidence: "Low"
          }
        ]
      },
      {
        boundingBox: [349, 969, 479, 969, 478, 1004, 348, 1003],
        text: "1, 00x2, 99",
        words: [
          {
            boundingBox: [351, 969, 371, 970, 372, 1004, 351, 1004],
            text: "1,"
          },
          {
            boundingBox: [378, 970, 439, 970, 441, 1004, 379, 1004],
            text: "00x2,"
          },
          {
            boundingBox: [446, 970, 478, 970, 480, 1003, 448, 1004],
            text: "99"
          }
        ]
      },
      {
        boundingBox: [488, 935, 594, 933, 594, 970, 489, 973],
        text: "3,60 A",
        words: [
          {
            boundingBox: [511, 937, 573, 934, 572, 971, 511, 972],
            text: "3,60"
          },
          {
            boundingBox: [579, 934, 592, 933, 592, 971, 579, 971],
            text: "A"
          }
        ]
      },
      {
        boundingBox: [31, 1001, 413, 1004, 413, 1043, 30, 1039],
        text: "DAN FANTASIA DO PICIA 240G . D",
        words: [
          {
            boundingBox: [31, 1006, 72, 1005, 75, 1038, 33, 1037],
            text: "DAN"
          },
          {
            boundingBox: [79, 1005, 196, 1004, 198, 1040, 81, 1038],
            text: "FANTASIA"
          },
          {
            boundingBox: [202, 1004, 236, 1004, 238, 1041, 204, 1041],
            text: "DO"
          },
          {
            boundingBox: [242, 1004, 317, 1004, 320, 1042, 244, 1041],
            text: "PICIA"
          },
          {
            boundingBox: [324, 1005, 376, 1005, 378, 1043, 326, 1042],
            text: "240G"
          },
          {
            boundingBox: [382, 1005, 384, 1005, 386, 1043, 384, 1043],
            text: "."
          },
          {
            boundingBox: [390, 1006, 411, 1006, 414, 1044, 393, 1043],
            text: "D"
          }
        ]
      },
      {
        boundingBox: [506, 973, 593, 966, 594, 1001, 509, 1003],
        text: "2,99 D",
        words: [
          {
            boundingBox: [512, 969, 572, 966, 574, 1001, 514, 1004],
            text: "2,99"
          },
          {
            boundingBox: [579, 966, 591, 965, 593, 1000, 581, 1001],
            text: "D"
          }
        ]
      },
      {
        boundingBox: [20, 1078, 417, 1079, 416, 1124, 19, 1122],
        text: "PIWO REDDS MANGO Q.5L PUSZ , A",
        words: [
          {
            boundingBox: [26, 1080, 83, 1079, 84, 1123, 27, 1124],
            text: "PIWO"
          },
          {
            boundingBox: [91, 1079, 165, 1079, 166, 1122, 92, 1123],
            text: "REDDS"
          },
          {
            boundingBox: [174, 1079, 248, 1080, 249, 1122, 175, 1122],
            text: "MANGO"
          },
          {
            boundingBox: [256, 1080, 313, 1082, 314, 1121, 257, 1122],
            text: "Q.5L",
            confidence: "Low"
          },
          {
            boundingBox: [321, 1082, 373, 1084, 374, 1120, 323, 1121],
            text: "PUSZ"
          },
          {
            boundingBox: [381, 1084, 381, 1084, 382, 1120, 382, 1120],
            text: ",",
            confidence: "Low"
          },
          {
            boundingBox: [390, 1085, 415, 1086, 416, 1120, 391, 1120],
            text: "A"
          }
        ]
      },
      {
        boundingBox: [329, 1045, 598, 1038, 599, 1078, 330, 1085],
        text: "1, 00x5, 40 5, 40 D",
        words: [
          {
            boundingBox: [350, 1047, 367, 1046, 370, 1084, 352, 1085],
            text: "1,"
          },
          {
            boundingBox: [375, 1045, 437, 1043, 439, 1083, 377, 1084],
            text: "00x5,"
          },
          {
            boundingBox: [444, 1043, 481, 1042, 483, 1081, 446, 1082],
            text: "40"
          },
          {
            boundingBox: [511, 1041, 531, 1041, 533, 1080, 513, 1081],
            text: "5,"
          },
          {
            boundingBox: [539, 1041, 571, 1041, 572, 1079, 540, 1080],
            text: "40"
          },
          {
            boundingBox: [578, 1041, 596, 1041, 597, 1079, 580, 1079],
            text: "D"
          }
        ]
      },
      {
        boundingBox: [337, 1123, 597, 1121, 598, 1162, 337, 1163],
        text: "1, 00x4, 55 4,55 A",
        words: [
          {
            boundingBox: [350, 1124, 367, 1124, 370, 1163, 352, 1162],
            text: "1,"
          },
          {
            boundingBox: [375, 1124, 436, 1125, 438, 1164, 377, 1163],
            text: "00x4,"
          },
          {
            boundingBox: [443, 1126, 484, 1126, 487, 1162, 446, 1163],
            text: "55"
          },
          {
            boundingBox: [511, 1126, 570, 1125, 573, 1158, 515, 1161],
            text: "4,55"
          },
          {
            boundingBox: [577, 1125, 595, 1125, 599, 1156, 581, 1157],
            text: "A"
          }
        ]
      },
      {
        boundingBox: [20, 1158, 579, 1159, 578, 1199, 19, 1197],
        text: "PIWO KSIAZECE ZLOTE PSZENICZNE 0.5L BU.A",
        words: [
          {
            boundingBox: [25, 1159, 82, 1159, 84, 1198, 27, 1199],
            text: "PIWO"
          },
          {
            boundingBox: [90, 1159, 205, 1159, 207, 1198, 92, 1198],
            text: "KSIAZECE"
          },
          {
            boundingBox: [213, 1159, 286, 1159, 288, 1198, 215, 1198],
            text: "ZLOTE",
            confidence: "Low"
          },
          {
            boundingBox: [293, 1159, 434, 1160, 436, 1198, 296, 1198],
            text: "PSZENICZNE"
          },
          {
            boundingBox: [442, 1160, 502, 1161, 504, 1198, 444, 1198],
            text: "0.5L",
            confidence: "Low"
          },
          {
            boundingBox: [510, 1161, 575, 1162, 577, 1198, 512, 1198],
            text: "BU.A"
          }
        ]
      },
      {
        boundingBox: [331, 1202, 604, 1195, 606, 1235, 333, 1243],
        text: "1, 00x3, 89 3,89 A",
        words: [
          {
            boundingBox: [352, 1205, 368, 1204, 371, 1241, 354, 1242],
            text: "1,"
          },
          {
            boundingBox: [376, 1203, 436, 1200, 439, 1238, 378, 1241],
            text: "00x3,"
          },
          {
            boundingBox: [443, 1200, 482, 1199, 485, 1236, 446, 1237],
            text: "89"
          },
          {
            boundingBox: [511, 1198, 571, 1198, 575, 1235, 514, 1236],
            text: "3,89"
          },
          {
            boundingBox: [579, 1198, 603, 1198, 606, 1235, 582, 1235],
            text: "A"
          }
        ]
      },
      {
        boundingBox: [28, 1233, 472, 1236, 471, 1274, 27, 1271],
        text: "W FRANKFURTERKI . D 0, 364x33, 50",
        words: [
          {
            boundingBox: [28, 1235, 43, 1235, 46, 1272, 31, 1272],
            text: "W",
            confidence: "Low"
          },
          {
            boundingBox: [50, 1235, 222, 1235, 225, 1273, 53, 1272],
            text: "FRANKFURTERKI"
          },
          {
            boundingBox: [230, 1235, 235, 1235, 238, 1273, 233, 1273],
            text: "."
          },
          {
            boundingBox: [242, 1235, 267, 1235, 270, 1273, 245, 1273],
            text: "D"
          },
          {
            boundingBox: [308, 1236, 331, 1236, 333, 1273, 311, 1273],
            text: "0,"
          },
          {
            boundingBox: [338, 1236, 424, 1237, 427, 1273, 341, 1273],
            text: "364x33,"
          },
          {
            boundingBox: [431, 1237, 468, 1238, 471, 1273, 434, 1273],
            text: "50"
          }
        ]
      },
      {
        boundingBox: [28, 1270, 159, 1269, 160, 1307, 29, 1307],
        text: "2 BANAN . B",
        words: [
          {
            boundingBox: [29, 1273, 45, 1272, 48, 1307, 32, 1307],
            text: "2",
            confidence: "Low"
          },
          {
            boundingBox: [52, 1272, 116, 1270, 118, 1306, 55, 1307],
            text: "BANAN"
          },
          {
            boundingBox: [123, 1270, 127, 1270, 129, 1307, 125, 1306],
            text: "."
          },
          {
            boundingBox: [134, 1270, 157, 1270, 158, 1308, 136, 1307],
            text: "B"
          }
        ]
      },
      {
        boundingBox: [474, 1237, 596, 1230, 599, 1270, 477, 1277],
        text: "12, 19 D",
        words: [
          {
            boundingBox: [499, 1237, 532, 1234, 534, 1274, 501, 1276],
            text: "12,"
          },
          {
            boundingBox: [540, 1234, 570, 1232, 573, 1273, 542, 1274],
            text: "19"
          },
          {
            boundingBox: [578, 1232, 596, 1231, 598, 1272, 580, 1272],
            text: "D"
          }
        ]
      },
      {
        boundingBox: [23, 1304, 417, 1305, 416, 1347, 22, 1346],
        text: "TYM 11 NAPOJ JABLKO-WISNIA.D",
        words: [
          {
            boundingBox: [29, 1310, 74, 1308, 76, 1345, 32, 1344],
            text: "TYM"
          },
          {
            boundingBox: [81, 1308, 112, 1307, 114, 1346, 83, 1345],
            text: "11"
          },
          {
            boundingBox: [118, 1307, 197, 1306, 198, 1347, 120, 1346],
            text: "NAPOJ"
          },
          {
            boundingBox: [203, 1306, 413, 1307, 413, 1347, 205, 1347],
            text: "JABLKO-WISNIA.D",
            confidence: "Low"
          }
        ]
      },
      {
        boundingBox: [328, 1268, 591, 1263, 592, 1304, 329, 1308],
        text: "0, 682x6, 50 4, 43 B",
        words: [
          {
            boundingBox: [335, 1273, 356, 1272, 359, 1305, 337, 1305],
            text: "0,"
          },
          {
            boundingBox: [363, 1272, 439, 1269, 442, 1305, 365, 1305],
            text: "682x6,"
          },
          {
            boundingBox: [446, 1269, 478, 1268, 480, 1305, 448, 1305],
            text: "50"
          },
          {
            boundingBox: [514, 1266, 533, 1266, 535, 1305, 516, 1305],
            text: "4,"
          },
          {
            boundingBox: [539, 1266, 573, 1264, 576, 1305, 542, 1305],
            text: "43"
          },
          {
            boundingBox: [580, 1264, 590, 1264, 593, 1305, 582, 1305],
            text: "B"
          }
        ]
      },
      {
        boundingBox: [20, 1382, 402, 1380, 403, 1421, 21, 1422],
        text: "KUBUS GO 0. 3L JABLKO 100% .D",
        words: [
          {
            boundingBox: [24, 1384, 98, 1384, 100, 1422, 26, 1421],
            text: "KUBUS"
          },
          {
            boundingBox: [105, 1384, 139, 1383, 141, 1422, 107, 1422],
            text: "GO"
          },
          {
            boundingBox: [146, 1383, 168, 1383, 170, 1422, 148, 1422],
            text: "0.",
            confidence: "Low"
          },
          {
            boundingBox: [175, 1383, 209, 1383, 210, 1422, 177, 1422],
            text: "3L"
          },
          {
            boundingBox: [216, 1383, 303, 1382, 304, 1421, 218, 1422],
            text: "JABLKO"
          },
          {
            boundingBox: [310, 1382, 360, 1381, 362, 1421, 311, 1421],
            text: "100%"
          },
          {
            boundingBox: [367, 1381, 401, 1381, 402, 1420, 369, 1420],
            text: ".D"
          }
        ]
      },
      {
        boundingBox: [332, 1349, 529, 1341, 531, 1385, 334, 1393],
        text: "1, 00x2, 75 2,",
        words: [
          {
            boundingBox: [350, 1350, 367, 1349, 367, 1391, 351, 1392],
            text: "1,"
          },
          {
            boundingBox: [375, 1348, 436, 1346, 436, 1388, 376, 1391],
            text: "00x2,",
            confidence: "Low"
          },
          {
            boundingBox: [444, 1345, 485, 1344, 486, 1387, 444, 1388],
            text: "75"
          },
          {
            boundingBox: [510, 1343, 530, 1342, 529, 1387, 510, 1387],
            text: "2,"
          }
        ]
      },
      {
        boundingBox: [336, 1423, 590, 1420, 591, 1461, 337, 1464],
        text: "2, 00x1, 99 3,98 D",
        words: [
          {
            boundingBox: [350, 1425, 370, 1424, 370, 1463, 350, 1463],
            text: "2,"
          },
          {
            boundingBox: [377, 1424, 437, 1422, 437, 1463, 377, 1463],
            text: "00x1,"
          },
          {
            boundingBox: [445, 1422, 483, 1422, 482, 1463, 445, 1463],
            text: "99"
          },
          {
            boundingBox: [513, 1422, 571, 1422, 569, 1462, 512, 1463],
            text: "3,98"
          },
          {
            boundingBox: [578, 1422, 591, 1422, 589, 1462, 577, 1462],
            text: "D",
            confidence: "Low"
          }
        ]
      },
      {
        boundingBox: [30, 1458, 493, 1456, 494, 1498, 31, 1500],
        text: "KUBUS MUS JOGURT BRZOSKWINIA 80G.D",
        words: [
          {
            boundingBox: [32, 1458, 97, 1458, 97, 1500, 31, 1501],
            text: "KUBUS",
            confidence: "Low"
          },
          {
            boundingBox: [105, 1458, 153, 1458, 153, 1500, 105, 1500],
            text: "MUS"
          },
          {
            boundingBox: [162, 1458, 247, 1458, 247, 1499, 162, 1500],
            text: "JOGURT"
          },
          {
            boundingBox: [255, 1458, 408, 1459, 408, 1498, 255, 1499],
            text: "BRZOSKWINIA"
          },
          {
            boundingBox: [416, 1459, 493, 1459, 494, 1497, 417, 1498],
            text: "80G.D",
            confidence: "Low"
          }
        ]
      },
      {
        boundingBox: [23, 1533, 429, 1532, 430, 1574, 24, 1575],
        text: "TYM MUS 100% TRUSKANKA 120G.D",
        words: [
          {
            boundingBox: [27, 1536, 70, 1535, 73, 1574, 29, 1575],
            text: "TYM"
          },
          {
            boundingBox: [78, 1535, 127, 1534, 129, 1573, 80, 1574],
            text: "MUS"
          },
          {
            boundingBox: [135, 1534, 196, 1533, 199, 1572, 137, 1573],
            text: "100%"
          },
          {
            boundingBox: [204, 1533, 330, 1535, 332, 1571, 206, 1572],
            text: "TRUSKANKA",
            confidence: "Low"
          },
          {
            boundingBox: [338, 1535, 428, 1538, 430, 1571, 340, 1571],
            text: "120G.D"
          }
        ]
      },
      {
        boundingBox: [340, 1498, 595, 1498, 594, 1536, 339, 1535],
        text: "1, 00x1, 99 1,99 D",
        words: [
          {
            boundingBox: [350, 1498, 370, 1499, 370, 1536, 350, 1536],
            text: "1,"
          },
          {
            boundingBox: [377, 1499, 437, 1500, 438, 1537, 378, 1536],
            text: "00x1,"
          },
          {
            boundingBox: [445, 1500, 482, 1500, 483, 1536, 445, 1537],
            text: "99"
          },
          {
            boundingBox: [512, 1500, 572, 1499, 573, 1536, 513, 1536],
            text: "1,99"
          },
          {
            boundingBox: [579, 1499, 594, 1499, 596, 1536, 581, 1536],
            text: "D"
          }
        ]
      },
      {
        boundingBox: [343, 1577, 588, 1573, 589, 1610, 344, 1615],
        text: "1, 00x1, 99 1, 99 0",
        words: [
          {
            boundingBox: [349, 1578, 367, 1577, 370, 1615, 352, 1616],
            text: "1,"
          },
          {
            boundingBox: [374, 1577, 437, 1576, 439, 1613, 377, 1615],
            text: "00x1,"
          },
          {
            boundingBox: [445, 1576, 482, 1575, 484, 1612, 447, 1613],
            text: "99"
          },
          {
            boundingBox: [512, 1575, 532, 1575, 534, 1610, 514, 1611],
            text: "1,"
          },
          {
            boundingBox: [540, 1575, 570, 1575, 571, 1610, 541, 1610],
            text: "99"
          },
          {
            boundingBox: [577, 1575, 587, 1575, 589, 1609, 579, 1609],
            text: "0",
            confidence: "Low"
          }
        ]
      },
      {
        boundingBox: [22, 1654, 156, 1655, 155, 1692, 21, 1691],
        text: "SP . OP . H",
        words: [
          {
            boundingBox: [28, 1655, 52, 1655, 51, 1692, 27, 1691],
            text: "SP"
          },
          {
            boundingBox: [59, 1655, 73, 1656, 72, 1692, 58, 1692],
            text: "."
          },
          {
            boundingBox: [80, 1656, 106, 1656, 106, 1692, 79, 1692],
            text: "OP"
          },
          {
            boundingBox: [113, 1656, 127, 1656, 127, 1692, 113, 1692],
            text: "."
          },
          {
            boundingBox: [135, 1656, 156, 1656, 156, 1692, 134, 1692],
            text: "H"
          }
        ]
      },
      {
        boundingBox: [226, 1651, 403, 1654, 402, 1690, 225, 1687],
        text: "13,93 PIU 23%",
        words: [
          {
            boundingBox: [230, 1654, 301, 1653, 303, 1687, 231, 1688],
            text: "13,93"
          },
          {
            boundingBox: [308, 1653, 356, 1654, 358, 1688, 309, 1687],
            text: "PIU",
            confidence: "Low"
          },
          {
            boundingBox: [363, 1654, 401, 1657, 403, 1690, 365, 1688],
            text: "23%",
            confidence: "Low"
          }
        ]
      },
      {
        boundingBox: [536, 1664, 592, 1659, 593, 1687, 538, 1693],
        text: "4, 60",
        words: [
          {
            boundingBox: [538, 1663, 558, 1661, 560, 1690, 541, 1692],
            text: "4,"
          },
          {
            boundingBox: [563, 1661, 590, 1658, 593, 1687, 566, 1690],
            text: "60",
            confidence: "Low"
          }
        ]
      },
      {
        boundingBox: [25, 1691, 157, 1692, 157, 1726, 24, 1724],
        text: "SP . OP , B",
        words: [
          {
            boundingBox: [28, 1693, 51, 1693, 50, 1725, 27, 1725],
            text: "SP"
          },
          {
            boundingBox: [57, 1693, 74, 1692, 74, 1725, 57, 1725],
            text: ".",
            confidence: "Low"
          },
          {
            boundingBox: [80, 1692, 105, 1692, 105, 1725, 80, 1725],
            text: "OP"
          },
          {
            boundingBox: [111, 1692, 128, 1693, 129, 1726, 112, 1725],
            text: ",",
            confidence: "Low"
          },
          {
            boundingBox: [134, 1693, 155, 1693, 156, 1727, 135, 1726],
            text: "B"
          }
        ]
      },
      {
        boundingBox: [17, 1727, 158, 1724, 159, 1765, 18, 1768],
        text: "Sp . OP . D",
        words: [
          {
            boundingBox: [27, 1728, 51, 1729, 51, 1766, 25, 1765],
            text: "Sp"
          },
          {
            boundingBox: [59, 1730, 73, 1731, 73, 1767, 58, 1766],
            text: "."
          },
          {
            boundingBox: [81, 1731, 105, 1730, 106, 1766, 81, 1767],
            text: "OP"
          },
          {
            boundingBox: [112, 1730, 127, 1729, 129, 1764, 114, 1765],
            text: "."
          },
          {
            boundingBox: [134, 1728, 156, 1726, 159, 1761, 136, 1763],
            text: "D"
          }
        ]
      },
      {
        boundingBox: [232, 1691, 394, 1698, 392, 1732, 230, 1725],
        text: "4,43 PIU 8%",
        words: [
          {
            boundingBox: [243, 1693, 301, 1695, 304, 1729, 245, 1727],
            text: "4,43"
          },
          {
            boundingBox: [308, 1695, 357, 1697, 360, 1731, 310, 1729],
            text: "PIU",
            confidence: "Low"
          },
          {
            boundingBox: [364, 1697, 391, 1698, 394, 1732, 367, 1731],
            text: "8%"
          }
        ]
      },
      {
        boundingBox: [527, 1694, 593, 1690, 597, 1726, 532, 1729],
        text: "0,33",
        words: [
          {
            boundingBox: [537, 1692, 593, 1689, 595, 1725, 539, 1728],
            text: "0,33"
          }
        ]
      },
      {
        boundingBox: [223, 1734, 390, 1732, 391, 1767, 224, 1768],
        text: "33, 54 PIU 5%",
        words: [
          {
            boundingBox: [228, 1735, 263, 1735, 264, 1768, 229, 1768],
            text: "33,"
          },
          {
            boundingBox: [270, 1735, 301, 1734, 302, 1768, 271, 1768],
            text: "54",
            confidence: "Low"
          },
          {
            boundingBox: [308, 1734, 356, 1734, 358, 1768, 309, 1768],
            text: "PIU"
          },
          {
            boundingBox: [363, 1734, 387, 1733, 389, 1767, 365, 1767],
            text: "5%",
            confidence: "Low"
          }
        ]
      },
      {
        boundingBox: [529, 1730, 599, 1723, 602, 1759, 532, 1766],
        text: "1,60",
        words: [
          {
            boundingBox: [537, 1729, 597, 1723, 601, 1758, 541, 1764],
            text: "1,60"
          }
        ]
      },
      {
        boundingBox: [19, 1768, 139, 1767, 140, 1803, 20, 1804],
        text: "Suma PTU",
        words: [
          {
            boundingBox: [26, 1770, 87, 1770, 89, 1804, 28, 1802],
            text: "Suma"
          },
          {
            boundingBox: [93, 1769, 136, 1768, 139, 1801, 95, 1803],
            text: "PTU"
          }
        ]
      },
      {
        boundingBox: [537, 1774, 596, 1774, 598, 1803, 539, 1803],
        text: "4,33",
        words: [
          {
            boundingBox: [540, 1774, 596, 1774, 596, 1803, 540, 1803],
            text: "4,33",
            confidence: "Low"
          }
        ]
      },
      {
        boundingBox: [20, 1849, 236, 1847, 237, 1892, 21, 1894],
        text: "SUMA PLN",
        words: [
          {
            boundingBox: [27, 1851, 135, 1849, 137, 1892, 29, 1894],
            text: "SUMA"
          },
          {
            boundingBox: [161, 1848, 235, 1848, 237, 1892, 163, 1892],
            text: "PLN"
          }
        ]
      },
      {
        boundingBox: [458, 1847, 593, 1844, 594, 1891, 459, 1894],
        text: "51,90",
        words: [
          {
            boundingBox: [459, 1848, 591, 1845, 593, 1890, 460, 1893],
            text: "51,90",
            confidence: "Low"
          }
        ]
      },
      {
        boundingBox: [26, 1933, 239, 1932, 240, 1966, 27, 1967],
        text: "90590/0740 # 02",
        words: [
          {
            boundingBox: [27, 1935, 170, 1933, 171, 1967, 29, 1968],
            text: "90590/0740",
            confidence: "Low"
          },
          {
            boundingBox: [176, 1933, 196, 1933, 197, 1967, 178, 1967],
            text: "#"
          },
          {
            boundingBox: [202, 1933, 237, 1933, 238, 1967, 203, 1967],
            text: "02"
          }
        ]
      },
      {
        boundingBox: [490, 1931, 596, 1934, 595, 1965, 489, 1962],
        text: "18:26:30",
        words: [
          {
            boundingBox: [490, 1933, 596, 1935, 596, 1964, 492, 1963],
            text: "18:26:30",
            confidence: "Low"
          }
        ]
      },
      {
        boundingBox: [29, 1973, 598, 1969, 599, 2007, 30, 2011],
        text: "#5378CF8176096374BF 64BUEADB78667043B6AZA#",
        words: [
          {
            boundingBox: [31, 1977, 291, 1971, 291, 2008, 30, 2012],
            text: "#5378CF8176096374BF",
            confidence: "Low"
          },
          {
            boundingBox: [298, 1971, 599, 1973, 598, 2009, 297, 2007],
            text: "64BUEADB78667043B6AZA#",
            confidence: "Low"
          }
        ]
      },
      {
        boundingBox: [193, 2007, 417, 2010, 417, 2047, 192, 2044],
        text: "BES 15485771",
        words: [
          {
            boundingBox: [255, 2009, 305, 2009, 305, 2045, 255, 2044],
            text: "BES"
          },
          {
            boundingBox: [311, 2009, 416, 2010, 417, 2047, 312, 2045],
            text: "15485771",
            confidence: "Low"
          }
        ]
      },
      {
        boundingBox: [192, 2087, 414, 2092, 414, 2132, 191, 2127],
        text: "# NIEFISKALNY #",
        words: [
          {
            boundingBox: [200, 2090, 217, 2090, 219, 2128, 201, 2128],
            text: "#"
          },
          {
            boundingBox: [225, 2090, 382, 2093, 383, 2132, 226, 2128],
            text: "NIEFISKALNY"
          },
          {
            boundingBox: [390, 2093, 412, 2092, 413, 2132, 390, 2132],
            text: "#"
          }
        ]
      },
      {
        boundingBox: [20, 2170, 374, 2170, 375, 2208, 21, 2209],
        text: "wydanie opakowan 0 1x0,50",
        words: [
          {
            boundingBox: [26, 2171, 129, 2174, 128, 2208, 25, 2206],
            text: "wydanie"
          },
          {
            boundingBox: [135, 2174, 249, 2174, 248, 2209, 135, 2209],
            text: "opakowan"
          },
          {
            boundingBox: [256, 2174, 278, 2173, 277, 2209, 255, 2209],
            text: "0",
            confidence: "Low"
          },
          {
            boundingBox: [285, 2173, 374, 2170, 373, 2207, 284, 2209],
            text: "1x0,50",
            confidence: "Low"
          }
        ]
      },
      {
        boundingBox: [540, 2176, 592, 2169, 594, 2206, 541, 2213],
        text: "6,50",
        words: [
          {
            boundingBox: [535, 2175, 589, 2168, 594, 2205, 540, 2212],
            text: "6,50",
            confidence: "Low"
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
