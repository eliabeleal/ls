# PROVA ECMA

### OBSERVAÇÕES

Leia as observações a seguir:

* A avaliação será realizada no computador, porém individualmente e em silêncio. Não deve haver nenhum tipo de comunicação entre os alunos;
* Cada questão é expressa através dessa indicação **(DD%)** que significa o critério de pontuação, contudo, a desorganização pode penalizar a pontuação final;
* No arquivo de resposta inclua um bloco de comentário no início de seu conteúdo com o nome e a matrícula do aluno;
* Ao concluir as questões chame o professor para avaliar a sua prova;
* Depois da avaliação envie os arquivos num diretório compactado, seguindo o formato de nome **ALUNO-MATRICULA** para o email **luiz.chaves.ifpb+avaliacoesls20171@gmail.com** com:

> **Assunto:** [IFPB] Prova I LS
>
> **Conteúdo:** Os arquivos da prova do aluno < nome do aluno > (< matrícula >) estão em anexo.

### DESCRIÇÃO DA PROVA

As questões das provas estão divididas em pastas neste [link](code.zip). Contudo, para executar cada questão será necessário fazer as seguintes execuções:

```
$ node -v # deve estar atualizado!
$ npm install yarn -g
$ yarn install
```

Após a instalação para executar os cenários de validação de cada questão use o `yarn` por meio do comando:

```
$ yarn run test
```
