export class Logger {
  private formatMessage(msg: any): string | undefined {
    if (!msg) {
      return;
    }

    return JSON.stringify(msg);
  }

  log(...args: any[]) {
    console.log.apply(console, args.map(this.formatMessage));
  }

  info(...args: any[]) {
    console.info.apply(console, args.map(this.formatMessage));
  }

  warn(...args: any[]) {
    console.warn.apply(console, args.map(this.formatMessage));
  }

  error(...args: any[]) {
    console.error.apply(console, args.map(this.formatMessage));
  }
}

const logger = new Logger();
export default logger;
