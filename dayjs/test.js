;(function(win, doc, undefined){

  
  const padStart = (string, length, pad) => {
    const s = String(string);
    // 判断是否有s 且长度 不能大于参数长度
    if (!s || s.length >= length) return string;
    
    return `${Array((length + 1) - s.length).join(pad)}${string}`;
  };



  const dayjs = (date, c) => {
    if (isDayjd())
  }

  // Dayjs

  class Dayjs {
    constructor(cfg) {
      this.parse(cfg);
    }

    parse(cfg) {
      this.$d = parseDate(cfg.date);
      this.init(cfg);
    }

    // 
    init(cfg) {
      this.$y = this.$d.getFullYear();
    }
  }

  const day1 = new Dayjs();
  


}(this));
