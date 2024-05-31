export let waAPI = {
  countryCode: +57,
  number: 3176510514,
  go: function (text) {
    if (this.number != false) {
      window.open(`https://api.whatsapp.com/send?phone=${this.countryCode}${this.number}&text=${window.encodeURIComponent(text)}`);
    }
  }
}