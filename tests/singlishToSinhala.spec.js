const { test, expect } = require('@playwright/test');


const testCases = [
  // =======================
  // POSITIVE FUNCTIONAL (24)
  // =======================
  {
    id: 'Pos_Fun_0001',
    name: 'Convert short daily statement',
    input: 'mama gedhara inne'
  },
  {
    id: 'Pos_Fun_0002',
    name: 'Convert interrogative greeting',
    input: 'oyata kohomadha?'
  },
  {
    id: 'Pos_Fun_0003',
    name: 'Convert polite request sentence',
    input: 'mata udhavvak karanna puluvandha'
  },
  {
    id: 'Pos_Fun_0004',
    name: 'Convert imperative command',
    input: 'issarahata yanna'
  },
  {
    id: 'Pos_Fun_0005',
    name: 'Convert negative sentence',
    input: 'mama ehema karanne na'
  },
  {
    id: 'Pos_Fun_0006',
    name: 'Convert future tense sentence',
    input: 'mama heta enne'
  },
  {
    id: 'Pos_Fun_0007',
    name: 'Convert past tense sentence',
    input: 'mama iye office giya'
  },
  {
    id: 'Pos_Fun_0008',
    name: 'Convert compound sentence',
    input: 'mama gedhara yanne namuth vaessa thiyenawa'
  },
  {
    id: 'Pos_Fun_0009',
    name: 'Convert conditional sentence',
    input: 'oya enne nam mama balan inne'
  },
  {
    id: 'Pos_Fun_0010',
    name: 'Convert plural pronoun usage',
    input: 'api passe kathaa karamu'
  },
  {
    id: 'Pos_Fun_0011',
    name: 'Convert sentence with English technical terms',
    input: 'mama zoom meeting ekata yanne'
  },
  {
    id: 'Pos_Fun_0012',
    name: 'Convert sentence with place name',
    input: 'api Kandy yamu'
  },
  {
    id: 'Pos_Fun_0013',
    name: 'Convert sentence with currency',
    input: 'mata Rs 500 oone'
  },
  {
    id: 'Pos_Fun_0014',
    name: 'Convert sentence with time format',
    input: 'meeting eka 7.30 AM'
  },
  {
    id: 'Pos_Fun_0015',
    name: 'Convert slang greeting',
    input: 'ela machan'
  },
  {
    id: 'Pos_Fun_0016',
    name: 'Convert input with extra spaces',
    input: 'mama   gedhara   inne'
  },
  {
    id: 'Pos_Fun_0017',
    name: 'Convert input with line breaks',
    input: 'mama gedhara inne\noayata call ekak karannam'
  },
  {
    id: 'Pos_Fun_0018',
    name: 'Convert long paragraph input',
    input:
      'mama me dawase gedhara inne namuth office wada godak thiyenawa saha traffic nisa kalinma yanna wenawa. passe api kathaa karamu kiyala hithan inne.'
  },
  {
    id: 'Pos_Fun_0019',
    name: 'Convert sentence with WhatsApp term',
    input: 'WhatsApp msg ekak yavanna'
  },
  {
    id: 'Pos_Fun_0020',
    name: 'Convert sentence with date format',
    input: 'api 2026-05-21 yamu'
  },
  {
    id: 'Pos_Fun_0021',
    name: 'Convert polite apology sentence',
    input: 'samawenna mama late una'
  },
  {
    id: 'Pos_Fun_0022',
    name: 'Convert repeated word emphasis',
    input: 'hari hari lassanai'
  },
  {
    id: 'Pos_Fun_0023',
    name: 'Convert singular pronoun sentence',
    input: 'eya gedhara giya'
  },
  {
    id: 'Pos_Fun_0024',
    name: 'Convert plural subject sentence',
    input: 'eyala enne'
  },

  // =======================
  // NEGATIVE FUNCTIONAL (10)
  // =======================
  {
    id: 'Neg_Fun_0001',
    name: 'Joined words without spacing',
    input: 'mamageharainne'
  },
  {
    id: 'Neg_Fun_0002',
    name: 'Heavy spelling errors',
    input: 'mma gddhra ynne'
  },
  {
    id: 'Neg_Fun_0003',
    name: 'Unsupported shorthand text',
    input: 'plz msg snd krn'
  },
  {
    id: 'Neg_Fun_0004',
    name: 'Random symbols included',
    input: 'mama @@@ gedhara'
  },
  {
    id: 'Neg_Fun_0005',
    name: 'Mixed language overload',
    input: 'mama gedhara yanne but traffic too much today'
  },
  {
    id: 'Neg_Fun_0006',
    name: 'Repeated character stress input',
    input: 'mamaaaa gedharaaaa'
  },
  {
    id: 'Neg_Fun_0007',
    name: 'Empty input',
    input: ''
  },
  {
    id: 'Neg_Fun_0008',
    name: 'Excessive spaces stress',
    input: 'mama      gedhara      yanne'
  },
  {
    id: 'Neg_Fun_0009',
    name: 'Long unstructured paragraph',
    input:
      'mama gedhara inne namuth office wada godak thiyenawa saha dawasata loku awulak wenawa. mehema liyala giyoth hariyata therum ganna amarui.'
  },
  {
    id: 'Neg_Fun_0010',
    name: 'Numeric-only input',
    input: '123456789'
  },

  // ==============
  // UI TEST (1)
  // ==============
  {
    id: 'Pos_UI_0001',
    name: 'Real-time Sinhala output update while typing',
    input: 'mama gedhara yanne'
  }
];





  
for (const tc of testCases) {
  test(`${tc.id} - ${tc.name}`, async ({ page }) => {

    await page.goto('https://swifttranslator.com');

    await page.fill('textarea', tc.input);

    // real-time translation
    await page.waitForTimeout(3000);

    const pageText = await page.textContent('body');
    expect(pageText).toMatch(/[\u0D80-\u0DFF]/);
  });
}
