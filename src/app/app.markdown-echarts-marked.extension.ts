import {MarkedExtension} from "marked";

export function appMarkdownEchartsMarkedExtension(): MarkedExtension {
  return {
    renderer: {
      code(code: string, language: string | undefined, _: boolean) {
        if (language === 'echart') {
          let codeToEchartOptions;
          try {
            codeToEchartOptions = JSON.stringify(JSON.parse(code));
          } catch (error) {
            try {
              let optionsObject = eval(`(${code})`);
              codeToEchartOptions = JSON.stringify(optionsObject);
            } catch (ignore) {
              return false
            }
          }
          codeToEchartOptions = codeToEchartOptions.replace(/(\r\n|\n|\r)/g, '');
          return `<div class="chart" echart echart-options='${codeToEchartOptions}' class="chart"></div>`
        }
        return false;
      }
    }
  };
}
