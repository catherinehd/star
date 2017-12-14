export class XingyunModel {
  all: number;
  love: number;
  work: number;
  money: number;
  color: string;
  number: string;
  luckyastro: string;
  badastro: string;
  short: string;
  summary: string;
  lovesummary: string;
  worksummary: string;
  moneysummary: string;
  constructor(options?: any) {
    if (options) {
      this.all = options.score;
      this.love = options.love_score;
      this.work = options.work_score;
      this.money = options.rich_score;
      this.color = options.luck_color;
      this.number = options.luck_number;
      this.luckyastro = options.luck_astro;
      this.badastro = options.bad_astro;
      this.short = options.short_descr;
      this.summary = options.summary;
      this.lovesummary = options.love_summary;
      this.worksummary = options.work_sumary;
      this.moneysummary = options.rich_summary;
    }
  }
}
