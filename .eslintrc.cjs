module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'react', 'react-hooks', 'filename-rules', 'react-refresh'],
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'prettier'],
  root: true,
  env: { browser: true, es2020: true },
  ignorePatterns: ['.eslintrc.cjs', 'node_modules/', 'dist/', 'build/', 'coverage/', 'babel.config.js', 'types/'],
  rules: {
    // ------------------ 에러 , 경고 모음 시작 ------------------
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }], // ! react-refresh 를 사용하지 않으면 경고를 발생시킵니다.
    'prettier/prettier': [
      'error',
      {
        semi: true,
        tabWidth: 2,
        printWidth: 140,
        singleQuote: true,
        trailingComma: 'all',
        jsxSingleQuote: true,
        bracketSpacing: true,
      },
    ], // ! prettier 설정
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: true,
        },
      },
    ], // ! 인터페이스 이름을 I 로 시작하게 합니다
    // ! file 들을 생성할때 kebab-case 를 사용하지 않으면 경고를 발생시킵니다.
    'filename-rules/match': [
      2,
      {
        '.js': /^([a-z]+-)*[a-z]+(?:\..*)?$/,
        '.ts': /^([a-z]+-)*[a-z]+(?:\..*)?$/,
        '.tsx': /^([a-z]+-)*[a-z]+(?:\..*)?$/,
      },
    ],

    // ! 사용되지 않는 변수에 대한 경고를 무시합니다.
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    'spaced-comment': 'warn', // !  주석 처음 시작할 때 공백을 사용하지 않으면 경고를 발생시킵니다.
    quotes: ['error', 'single', { allowTemplateLiterals: true }], // ! 따옴표 사용 & 템플릿 리터럴 허용
    'no-duplicate-imports': 'error', // ! 중복된 import 를 사용하면 에러를 발생시킵니다.
    '@typescript-eslint/no-empty-function': 'warn', // ! 빈 함수를 사용하면 경고를 발생시킵니다.
    // ! ts-ignore, ts-expect-error, ts-nocheck, ts-check 를 사용하면 에러를 발생시킵니다.
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': 'allow-with-description',
        'ts-nocheck': 'allow-with-description',
        'ts-check': 'allow-with-description',
        minimumDescriptionLength: 3,
      },
    ],
    '@typescript-eslint/no-use-before-define': 'error', // ! 변수를 선언하기 전에 사용하면 에러를 발생시킵니다.
    'react-hooks/rules-of-hooks': 'error', // ! react hooks 를 사용하지 않으면 에러를 발생시킵니다.
    'react-hooks/exhaustive-deps': 'off', // ! useEffect 에서 의존성 배열 경고,에러를 발생시키지 않습니다.
    'react/prop-types': 'off', // ! prop-types 를 사용하지 않으면 경고를 발생시키지 않습니다.
    'react/display-name': 'off', // ! displayName 을 사용하지 않으면 경고를 발생시키지 않습니다.
    'react/jsx-props-no-spreading': 'off', // ! props 를 전달할 때 spread 연산자를 사용하지 않으면 경고를 발생시키지 않습니다.

    // ------------------ 에러 , 경고 모음 끝 ------------------

    'react/react-in-jsx-scope': 'off', // ? react import 안해도 에러 안뜨게 합니다
    '@typescript-eslint/no-explicit-any': 'off', // ? any 타입을 사용해도 경고를 안뜨게 합니다
    'no-unused-vars': 'off', // ? 사용되지 않는 변수에 대한 경고를 무시합니다.
    camelcase: 'off', // ? 카멜케이스를 사용하지 않아도 경고를 발생시키지 않습니다.
    '@typescript-eslint/no-var-requires': 'off', // ? require 를 사용해도 경고를 발생시키지 않습니다.

    '@typescript-eslint/explicit-member-accessibility': 'off', // ? 클래스 멤버 접근 제한자를 사용하지 않아도 경고를 발생시키지 않습니다.
    '@typescript-eslint/no-parameter-properties': 'off', // ? 생성자의 매개변수에 접근 제한자를 사용하지 않아도 경고를 발생시키지 않습니다.
    '@typescript-eslint/explicit-module-boundary-types': 'off', // ? 모듈의 반환 타입을 명시하지 않아도 경고를 발생시키지 않습니다.
  },
};
