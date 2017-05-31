# SIMULADO ECMA

As questões foram inspiradas nessa prova https://github.com/ifpb/ls-20162/blob/master/assessment/prova-ecma/prova.md.

## Processing Text
```
console.log(processText('upperCase', 'fulano\nifpb jp')
//=> FULANO
//=> IFPB JP

console.log(processText('lowerCase', 'FULANO\nIFPB JP')
//=> fulano
//=> ifpb jp

console.log(processText('camelCase', 'FULANO\nIFPB JP')
//=> Fulano
//=> Ifpb Jp

console.log(processText('snakeCase', 'FULANO\nIFPB JP')
//=> FULANO_IFPB_JP

console.log(processText('reverse', 'FULANO\nIFPB')
//=> BPFI
//=> ONALUF

console.log(processText('countWords', 'fulano\nifpb')
//=> 2

console.log(processText('countLines', 'fulano\nifpb')
//=> 2
```

## Students
```
const data = {
  "students": [
    {"id": "20142370120", "name": "ÁLAMO PÉRICLES NUNES DE ARAÚJO"},
    {"id": "20162370052", "name": "ANDERSON FABRICIO MEDEIROS DA SILVA"},
    {"id": "20152370239", "name": "CARLOS EDUARDO VICTOR CARNEIRO GONÇALVES COELHO"},
    {"id": "20142370252", "name": "DYNNAH HANNA MAX PEREIRA G. DA SILVA"},
    {"id": "20161370051", "name": "GEORGE KLYNSMANN GUIMARÃES MELO"},
    {"id": "20142370236", "name": "GLAUDJA FERREIRA ALEXANDRE"},
    {"id": "20142370279", "name": "HELENA JULIANA BARROS MIGUEL"},
    {"id": "20151370219", "name": "ÍTALLO NÓBREGA PRIMO"},
    {"id": "20152370123", "name": "JOSE RAIMUNDO FERNANDES FILHO"},
    {"id": "20151370227", "name": "JOSÉ VÍCTOR DANTAS"},
    {"id": "20162370057", "name": "JOSIVALDO GOMES RODRIGUES JÚNIOR"},
    {"id": "20152370085", "name": "MATHEUS AUGUSTO COUTINHO COSTA"},
    {"id": "20132370217", "name": "PEDRO SAULO GOMES VELOSO"},
    {"id": "20142370368", "name": "RAFAEL DA SILVA MARINHO"},
    {"id": "20162370007", "name": "Aaron Pedro Santana dos Santos"},
    {"id": "20162370008", "name": "Andre Vieira Xavier da Costa"},
    {"id": "20161370032", "name": "Dennison Augusto Franco e Silva"},
    {"id": "20162370035", "name": "Eliabe Leal de Oliveira"},
    {"id": "20161370009", "name": "Helder Jerônimo Leite Rangel"},
    {"id": "20161370040", "name": "João Pedro Albuquerque de Barros"},
    {"id": "20161370001", "name": "Jonildo Suéliton Santos de Melo"},
    {"id": "20162370005", "name": "Larissa de Sousa Moreira Gusmão"},
    {"id": "20162370025", "name": "Leonan Severino Batista da Silva"},
    {"id": "20161370013", "name": "Mayara Gomes Pereira"},
    {"id": "20161370021", "name": "Pedro Henrique de Sales Xavier"},
    {"id": "20161370031", "name": "Sabrina Holanda Florentino"},
    {"id": "20161370026", "name": "Veihmeyer de Alencar Toscano Moura"},
    {"id": "20162370030", "name": "William Oliveira Lima"}
  ]
}

console.log(showStudent(data))
//=>
// 01 20142370120 ÁLAMO PÉRICLES NUNES DE ARAÚJO
// 02 20162370052 ANDERSON FABRICIO MEDEIROS DA SILVA
// 03 20152370239 CARLOS EDUARDO VICTOR CARNEIRO GONÇALVES COELHO
// 04 20142370252 DYNNAH HANNA MAX PEREIRA G. DA SILVA
// 05 20161370051 GEORGE KLYNSMANN GUIMARÃES MELO
// 06 20142370236 GLAUDJA FERREIRA ALEXANDRE
// 07 20142370279 HELENA JULIANA BARROS MIGUEL
// 08 20151370219 ÍTALLO NÓBREGA PRIMO
// 09 20152370123 JOSE RAIMUNDO FERNANDES FILHO
// 10 20151370227 JOSÉ VÍCTOR DANTAS
// 11 20162370057 JOSIVALDO GOMES RODRIGUES JÚNIOR
// 12 20152370085 MATHEUS AUGUSTO COUTINHO COSTA
// 13 20132370217 PEDRO SAULO GOMES VELOSO
// 14 20142370368 RAFAEL DA SILVA MARINHO
// 15 20162370007 Aaron Pedro Santana dos Santos
// 16 20162370008 Andre Vieira Xavier da Costa
// 17 20161370032 Dennison Augusto Franco e Silva
// 18 20162370035 Eliabe Leal de Oliveira
// 19 20161370009 Helder Jerônimo Leite Rangel
// 20 20161370040 João Pedro Albuquerque de Barros
// 21 20161370001 Jonildo Suéliton Santos de Melo
// 22 20162370005 Larissa de Sousa Moreira Gusmão
// 23 20162370025 Leonan Severino Batista da Silva
// 24 20161370013 Mayara Gomes Pereira
// 25 20161370021 Pedro Henrique de Sales Xavier
// 26 20161370031 Sabrina Holanda Florentino
// 27 20161370026 Veihmeyer de Alencar Toscano Moura
// 28 20162370030 William Oliveira Lima

console.log(showStudentName(data))
//=>
//                  ÁLAMO PÉRICLES NUNES DE ARAÚJO
//             ANDERSON FABRICIO MEDEIROS DA SILVA
// CARLOS EDUARDO VICTOR CARNEIRO GONÇALVES COELHO
//            DYNNAH HANNA MAX PEREIRA G. DA SILVA
//                 GEORGE KLYNSMANN GUIMARÃES MELO
//                      GLAUDJA FERREIRA ALEXANDRE
//                    HELENA JULIANA BARROS MIGUEL
//                            ÍTALLO NÓBREGA PRIMO
//                   JOSE RAIMUNDO FERNANDES FILHO
//                              JOSÉ VÍCTOR DANTAS
//                JOSIVALDO GOMES RODRIGUES JÚNIOR
//                  MATHEUS AUGUSTO COUTINHO COSTA
//                        PEDRO SAULO GOMES VELOSO
//                         RAFAEL DA SILVA MARINHO
//                  Aaron Pedro Santana dos Santos
//                    Andre Vieira Xavier da Costa
//                 Dennison Augusto Franco e Silva
//                         Eliabe Leal de Oliveira
//                    Helder Jerônimo Leite Rangel
//                João Pedro Albuquerque de Barros
//                 Jonildo Suéliton Santos de Melo
//                 Larissa de Sousa Moreira Gusmão
//                Leonan Severino Batista da Silva
//                            Mayara Gomes Pereira
//                  Pedro Henrique de Sales Xavier
//                      Sabrina Holanda Florentino
//              Veihmeyer de Alencar Toscano Moura
//                           William Oliveira Lima
```

## HTML Entities
```
const entities = {
  "&Aacute;": { "codepoints": [193], "characters": "\u00C1" },
  "&Aacute": { "codepoints": [193], "characters": "\u00C1" },
  "&aacute;": { "codepoints": [225], "characters": "\u00E1" },
  "&aacute": { "codepoints": [225], "characters": "\u00E1" },
  "&Abreve;": { "codepoints": [258], "characters": "\u0102" },
  "&abreve;": { "codepoints": [259], "characters": "\u0103" },
  "&ac;": { "codepoints": [8766], "characters": "\u223E" },
  "&acd;": { "codepoints": [8767], "characters": "\u223F" },
  "&Acirc;": { "codepoints": [194], "characters": "\u00C2" },
  "&Acirc": { "codepoints": [194], "characters": "\u00C2" },
  "&acirc;": { "codepoints": [226], "characters": "\u00E2" },
  "&acirc": { "codepoints": [226], "characters": "\u00E2" },
  "&acute;": { "codepoints": [180], "characters": "\u00B4" },
  "&acute": { "codepoints": [180], "characters": "\u00B4" },
  "&Acy;": { "codepoints": [1040], "characters": "\u0410" },
  "&acy;": { "codepoints": [1072], "characters": "\u0430" },
  "&AElig;": { "codepoints": [198], "characters": "\u00C6" },
  "&AElig": { "codepoints": [198], "characters": "\u00C6" },
  "&aelig;": { "codepoints": [230], "characters": "\u00E6" },
  "&aelig": { "codepoints": [230], "characters": "\u00E6" },
  "&Agrave;": { "codepoints": [192], "characters": "\u00C0" },
  "&Agrave": { "codepoints": [192], "characters": "\u00C0" },
  "&agrave;": { "codepoints": [224], "characters": "\u00E0" },
  "&agrave": { "codepoints": [224], "characters": "\u00E0" },
  "&alefsym;": { "codepoints": [8501], "characters": "\u2135" },
  "&aleph;": { "codepoints": [8501], "characters": "\u2135" },
  "&Alpha;": { "codepoints": [913], "characters": "\u0391" },
  "&alpha;": { "codepoints": [945], "characters": "\u03B1" },
  "&Amacr;": { "codepoints": [256], "characters": "\u0100" },
  "&amacr;": { "codepoints": [257], "characters": "\u0101" },
  "&amalg;": { "codepoints": [10815], "characters": "\u2A3F" },
  "&AMP;": { "codepoints": [38], "characters": "\u0026" }
}

console.log(showEntitiesTable(entities))

//=>
// 01 Á  &Aacute;   &193;   &c1;
// 02 Á   &Aacute   &193;   &c1;
// 03 á  &aacute;   &225;   &e1;
// 04 á   &aacute   &225;   &e1;
// 05 Ă  &Abreve;   &258;  &102;
// 06 ă  &abreve;   &259;  &103;
// 07 ∾      &ac;  &8766; &223e;
// 08 ∿     &acd;  &8767; &223f;
// 09 Â   &Acirc;   &194;   &c2;
// 10 Â    &Acirc   &194;   &c2;
// 11 â   &acirc;   &226;   &e2;
// 12 â    &acirc   &226;   &e2;
// 13 ´   &acute;   &180;   &b4;
// 14 ´    &acute   &180;   &b4;
// 15 А     &Acy;  &1040;  &410;
// 16 а     &acy;  &1072;  &430;
// 17 Æ   &AElig;   &198;   &c6;
// 18 Æ    &AElig   &198;   &c6;
// 19 æ   &aelig;   &230;   &e6;
// 20 æ    &aelig   &230;   &e6;
// 21 À  &Agrave;   &192;   &c0;
// 22 À   &Agrave   &192;   &c0;
// 23 à  &agrave;   &224;   &e0;
// 24 à   &agrave   &224;   &e0;
// 25 ℵ &alefsym;  &8501; &2135;
// 26 ℵ   &aleph;  &8501; &2135;
// 27 Α   &Alpha;   &913;  &391;
// 28 α   &alpha;   &945;  &3b1;
// 29 Ā   &Amacr;   &256;  &100;
// 30 ā   &amacr;   &257;  &101;
// 31 ⨿   &amalg; &10815; &2a3f;
// 32 &     &AMP;    &38;   &26;
```
