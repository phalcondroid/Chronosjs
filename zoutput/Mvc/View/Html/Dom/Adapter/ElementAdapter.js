System.register(["../Elements/A"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var A_1, ElementAdapter;
    return {
        setters: [
            function (A_1_1) {
                A_1 = A_1_1;
            }
        ],
        execute: function () {
            ElementAdapter = class ElementAdapter {
                /**
                 *
                 */
                constructor(element, tagName = false) {
                    /**
                     *
                     */
                    this.element = false;
                    if (typeof tagName == "string") {
                        this.element = tagName;
                    }
                    else {
                        this.element = element;
                    }
                }
                /**
                 *
                 */
                get() {
                    if (!this.element || typeof this.element.nodeName != "undefined") {
                        return false;
                    }
                    let instance = false;
                    switch (this.element.nodeName) {
                        case "A":
                            instance = new A_1.A();
                            break;
                        case "ABBR":
                            instance = new Northwind.Tag.Abbr();
                            break;
                        case "ADDRESS":
                            instance = new Northwind.Tag.Address();
                            break;
                        case "AREA":
                            instance = new Northwind.Tag.Area();
                            break;
                        case "ARTICLE":
                            instance = new Northwind.Tag.Article();
                            break;
                        case "ASIDE":
                            instance = new Northwind.Tag.Aside();
                            break;
                        case "AUDIO":
                            instance = new Northwind.Tag.Audio();
                            break;
                        case "B":
                            instance = new Northwind.Tag.B();
                            break;
                        case "BASE":
                            instance = new Northwind.Tag.Base();
                            break;
                        case "BDI":
                            instance = new Northwind.Tag.Bdi();
                            break;
                        case "BDO":
                            instance = new Northwind.Tag.Bdo();
                            break;
                        case "BLOCKQUOTE":
                            instance = new Northwind.Tag.Blockquote();
                            break;
                        case "BODY":
                            instance = new Northwind.Tag.Body();
                            break;
                        case "BR":
                            instance = new Northwind.Tag.Br();
                            break;
                        case "BUTTON":
                            instance = new Northwind.Tag.Button();
                            break;
                        case "CANVAS":
                            instance = new Northwind.Tag.Canvas();
                            break;
                        case "CAPTION":
                            instance = new Northwind.Tag.Caption();
                            break;
                        case "CITE":
                            instance = new Northwind.Tag.Cite();
                            break;
                        case "CODE":
                            instance = new Northwind.Tag.Code();
                            break;
                        case "COL":
                            instance = new Northwind.Tag.Col();
                            break;
                        case "COLGROUP":
                            instance = new Northwind.Tag.ColGroup();
                            break;
                        case "DATALIST":
                            instance = new Northwind.Tag.Datalist();
                            break;
                        case "DB":
                            instance = new Northwind.Tag.Db();
                            break;
                        case "DEL":
                            instance = new Northwind.Tag.Del();
                            break;
                        case "DETAILS":
                            instance = new Northwind.Tag.Details();
                            break;
                        case "DFN":
                            instance = new Northwind.Tag.Dfn();
                            break;
                        case "DIALOG":
                            instance = new Northwind.Tag.Dialog();
                            break;
                        case "DIV":
                            instance = new Northwind.Tag.Div();
                            break;
                        case "DL":
                            instance = new Northwind.Tag.Dl();
                            break;
                        case "DT":
                            instance = new Northwind.Tag.Dt();
                            break;
                        case "EM":
                            instance = new Northwind.Tag.Em();
                            break;
                        case "EMBED":
                            instance = new Northwind.Tag.Embed();
                            break;
                        case "FIELDSET":
                            instance = new Northwind.Tag.Fieldset();
                            break;
                        case "FIGCAPTION":
                            instance = new Northwind.Tag.Figcaption();
                            break;
                        case "FIGURE":
                            instance = new Northwind.Tag.Figure();
                            break;
                        case "FOOTER":
                            instance = new Northwind.Tag.Footer();
                            break;
                        case "FORM":
                            instance = new Northwind.Tag.Form();
                            break;
                        case "H1":
                            instance = new Northwind.Tag.H1();
                            break;
                        case "H2":
                            instance = new Northwind.Tag.H2();
                            break;
                        case "H3":
                            instance = new Northwind.Tag.H3();
                            break;
                        case "H4":
                            instance = new Northwind.Tag.H4();
                            break;
                        case "H5":
                            instance = new Northwind.Tag.H5();
                            break;
                        case "H6":
                            instance = new Northwind.Tag.H6();
                            break;
                        case "HEAD":
                            instance = new Northwind.Tag.Head();
                            break;
                        case "HEADER":
                            instance = new Northwind.Tag.Header();
                            break;
                        case "I":
                            instance = new Northwind.Tag.I();
                            break;
                        case "IFRAME":
                            instance = new Northwind.Tag.Iframe();
                            break;
                        case "IMG":
                            instance = new Northwind.Tag.Img();
                            break;
                        case "INPUT":
                            instance = new Northwind.Tag.Input();
                            break;
                        case "INS":
                            instance = new Northwind.Tag.Ins();
                            break;
                        case "KBD":
                            instance = new Northwind.Tag.Kbd();
                            break;
                        case "KEYGEN":
                            instance = new Northwind.Tag.Keygen();
                            break;
                        case "LABEL":
                            instance = new Northwind.Tag.Label();
                            break;
                        case "LEYEND":
                            instance = new Northwind.Tag.Leyend();
                            break;
                        case "LI":
                            instance = new Northwind.Tag.Li();
                            break;
                        case "LINK":
                            instance = new Northwind.Tag.Link();
                            break;
                        case "MAIN":
                            instance = new Northwind.Tag.Main();
                            break;
                        case "MAP":
                            instance = new Northwind.Tag.Map();
                            break;
                        case "MENU":
                            instance = new Northwind.Tag.Menu();
                            break;
                        case "MENUITEM":
                            instance = new Northwind.Tag.Menuitem();
                            break;
                        case "META":
                            instance = new Northwind.Tag.Meta();
                            break;
                        case "META":
                            instance = new Northwind.Tag.Meta();
                            break;
                        case "METER":
                            instance = new Northwind.Tag.Meter();
                            break;
                        case "NAV":
                            instance = new Northwind.Tag.Nav();
                            break;
                        case "NOSCRIP":
                            instance = new Northwind.Tag.Noscrip();
                            break;
                        case "OBJECT":
                            instance = new Northwind.Tag.Obj();
                            break;
                        case "OL":
                            instance = new Northwind.Tag.Ol();
                            break;
                        case "OPTGROUP":
                            instance = new Northwind.Tag.Optgroup();
                            break;
                        case "P":
                            instance = new Northwind.Tag.P();
                            break;
                        case "PARAM":
                            instance = new Northwind.Tag.Param();
                            break;
                        case "PRE":
                            instance = new Northwind.Tag.Pre();
                            break;
                        case "PROGRESS":
                            instance = new Northwind.Tag.Progress();
                            break;
                        case "Q":
                            instance = new Northwind.Tag.Q();
                            break;
                        case "RP":
                            instance = new Northwind.Tag.Rp();
                            break;
                        case "RT":
                            instance = new Northwind.Tag.Rt();
                            break;
                        case "RUBY":
                            instance = new Northwind.Tag.Ruby();
                            break;
                        case "S":
                            instance = new Northwind.Tag.S();
                            break;
                        case "SAMP":
                            instance = new Northwind.Tag.Samp();
                            break;
                        case "SCRIPT":
                            instance = new Northwind.Tag.Script();
                            break;
                        case "SECTION":
                            instance = new Northwind.Tag.Section();
                            break;
                        case "SELECT":
                            instance = new Northwind.Tag.Select();
                            break;
                        case "SMALL":
                            instance = new Northwind.Tag.Small();
                            break;
                        case "SOURCE":
                            instance = new Northwind.Tag.Source();
                            break;
                        case "SPAN":
                            instance = new Northwind.Tag.Span();
                            break;
                        case "STRONG":
                            instance = new Northwind.Tag.Strong();
                            break;
                        case "STYLE":
                            instance = new Northwind.Tag.Style();
                            break;
                        case "SUB":
                            instance = new Northwind.Tag.Sub();
                            break;
                        case "SUMMARY":
                            instance = new Northwind.Tag.Summary();
                            break;
                        case "SUP":
                            instance = new Northwind.Tag.Sup();
                            break;
                        case "TABLE":
                            instance = new Northwind.Tag.Table();
                            break;
                        case "TBODY":
                            instance = new Northwind.Tag.Tbody();
                            break;
                        case "TD":
                            instance = new Northwind.Tag.Td();
                            break;
                        case "TEXTAREA":
                            instance = new Northwind.Tag.Textarea();
                            break;
                        case "TFOOT":
                            instance = new Northwind.Tag.Tfoot();
                            break;
                        case "TH":
                            instance = new Northwind.Tag.Th();
                            break;
                        case "THEAD":
                            instance = new Northwind.Tag.Thead();
                            break;
                        case "TIME":
                            instance = new Northwind.Tag.Time();
                            break;
                        case "TITLE":
                            instance = new Northwind.Tag.Title();
                            break;
                        case "TR":
                            instance = new Northwind.Tag.Tr();
                            break;
                        case "TRACK":
                            instance = new Northwind.Tag.Track();
                            break;
                        case "U":
                            instance = new Northwind.Tag.U();
                            break;
                        case "UL":
                            instance = new Northwind.Tag.Ul();
                            break;
                        case "VAR":
                            instance = new Northwind.Tag.Var();
                            break;
                        case "VIDEO":
                            instance = new Northwind.Tag.Video();
                            break;
                        case "WBR":
                            instance = new Northwind.Tag.Wbr();
                            break;
                        default:
                            "";
                            break;
                    }
                    instance.setElement(this.element);
                    return instance;
                }
            };
            exports_1("ElementAdapter", ElementAdapter);
        }
    };
});
