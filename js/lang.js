class Language {
    constructor(lang) {
        this.lang = lang;
    }
    get(str) {
        return langData.languages[this.lang].strings[str];
    }
    changeLang(lang){
        if(this.lang != lang) this.lang = lang;
    }
    getLang(){
        return this.lang;
    }
}