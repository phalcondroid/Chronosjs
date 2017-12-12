import { HtmlElement } from "../Wrappers/HtmlElement";
import { A } from "../Elements/A";
import { Abbr } from "../Elements/Abbr";
import { Address } from "../Elements/Address";
import { Area } from "../Elements/Area";
import { Article } from "../Elements/Article";
import { Aside } from "../Elements/Aside";
import { B } from "../Elements/B";
import { Base } from "../Elements/Base";
import { Bdi } from "../Elements/Bdi";
import { Bdo } from "../Elements/Bdo";
import { Blockquote } from "../Elements/Blockquote";
import { Body } from "../Elements/Body";
import { Br } from "../Elements/Br";
import { Button } from "../Elements/Button";
import { Canvas } from "../Elements/Canvas";
import { Caption } from "../Elements/Caption";
import { Cite } from "../Elements/Cite";
import { Code } from "../Elements/Code";
import { Col } from "../Elements/Col";
import { ColGroup } from "../Elements/ColGroup";
import { Datalist } from "../Elements/Datalist";
import { Db } from "../Elements/Db";
import { Del } from "../Elements/Del";
import { Details } from "../Elements/Details";
import { Dfn } from "../Elements/Dfn";
import { Dialog } from "../Elements/Dialog";
import { Div } from "../Elements/Div";
import { Dl } from "../Elements/Dl";
import { Dt } from "../Elements/Dt";
import { Em } from "../Elements/Em";
import { Embed } from "../Elements/Embed";
import { Fieldset } from "../Elements/Fieldset";
import { Figcaption } from "../Elements/Figcaption";
import { Figure } from "../Elements/Figure";
import { Footer } from "../Elements/Footer";
import { Form } from "../Elements/Form";
import { H1 } from "../Elements/H1";
import { H2 } from "../Elements/H2";
import { H3 } from "../Elements/H3";
import { H4 } from "../Elements/H4";
import { H5 } from "../Elements/H5";
import { H6 } from "../Elements/H6";
import { Head } from "../Elements/Head";
import { Header } from "../Elements/Header";
import { I } from "../Elements/I";
import { Iframe } from "../Elements/Iframe";
import { Img } from "../Elements/Img";
import { Input } from "../Elements/Input";
import { Ins } from "../Elements/Ins";
import { Kbd } from "../Elements/Kbd";
import { Keygen } from "../Elements/Keygen";
import { Label } from "../Elements/Label";
import { Leyend } from "../Elements/Leyend";
import { Li } from "../Elements/Li";
import { Link } from "../Elements/Link";
import { Main } from "../Elements/Main";
import { Menu } from "../Elements/Menu";
import { Menuitem } from "../Elements/Menuitem";
import { Meta } from "../Elements/Meta";
import { Meter } from "../Elements/Meter";
import { Nav } from "../Elements/Nav";
import { Noscrip } from "../Elements/Noscrip";
import { Obj } from "../Elements/Obj";
import { Ol } from "../Elements/Ol";
import { Optgroup } from "../Elements/Optgroup";
import { P } from "../Elements/P";
import { Param } from "../Elements/Param";
import { Pre } from "../Elements/Pre";
import { Progress } from "../Elements/Progress";
import { Q } from "../Elements/Q";
import { Rp } from "../Elements/Rp";
import { Rt } from "../Elements/Rt";
import { Ruby } from "../Elements/Ruby";
import { S } from "../Elements/S";
import { Samp } from "../Elements/Samp";
import { Script } from "../Elements/Script";
import { Section } from "../Elements/Section";
import { Select } from "../Elements/Select";
import { Small } from "../Elements/Small";
import { Source } from "../Elements/Source";
import { Span } from "../Elements/Span";
import { Strong } from "../Elements/Strong";
import { Style } from "../Elements/Style";
import { Sub } from "../Elements/Sub";
import { Summary } from "../Elements/Summary";
import { Sup } from "../Elements/Sup";
import { Td } from "../Elements/Td";
import { Table } from "../Elements/Table";
import { Tbody } from "../Elements/Tbody";
import { Textarea } from "../Elements/Textarea";
import { Tfoot } from "../Elements/Tfoot";
import { Th } from "../Elements/Th";
import { Thead } from "../Elements/Thead";
import { Time } from "../Elements/Time";
import { Title } from "../Elements/Title";
import { Tr } from "../Elements/Tr";
import { Track } from "../Elements/Track";
import { U } from "../Elements/U";
import { Ul } from "../Elements/Ul";
import { Var } from "../Elements/Var";
import { Video } from "../Elements/Video";
import { Wbr } from "../Elements/Wbr";

export class ElementAdapter
{
    /**
     *
     */
    private element : any = false;

    /**
     *
     */
    public constructor(element, tagName = false)
    {
        if (typeof tagName == "string") {
            this.element = tagName;
        } else {
            this.element = element;
        }
    }

    /**
     *
     */
    public get()
    {
        if (!this.element || typeof this.element.nodeName != "undefined") {
            return false;
        }
        let instance : any = false;
        switch (this.element.nodeName) {
            case "A":
                    instance = new A();
                break;
            case "ABBR":
                    instance = new Abbr();
                break;
            case "ADDRESS":
                    instance = new Address();
                break;
            case "AREA":
                    instance = new Area();
                break;
            case "ARTICLE":
                    instance = new Article();
                break;
            case "ASIDE":
                    instance = new Aside();
                break;
            case "AUDIO":
                    instance = new Audio();
                break;
            case "B":
                    instance = new B();
                break;
            case "BASE":
                    instance = new Base();
                break;
            case "BDI":
                    instance = new Bdi();
                break;
            case "BDO":
                    instance = new Bdo();
                break;
            case "BLOCKQUOTE":
                    instance = new Blockquote();
                break;
            case "BODY":
                    instance = new Body();
                break;
            case "BR":
                    instance = new Br();
                break;
            case "BUTTON":
                    instance = new Button();
                break;
            case "CANVAS":
                    instance = new Canvas();
                break;
            case "CAPTION":
                    instance = new Caption();
                break;
            case "CITE":
                    instance = new Cite();
                break;
            case "CODE":
                    instance = new Code();
                break;
            case "COL":
                    instance = new Col();
                break;
            case "COLGROUP":
                    instance = new ColGroup();
                break;
            case "DATALIST":
                    instance = new Datalist();
                break;
            case "DB":
                    instance = new Db();
                break;
            case "DEL":
                    instance = new Del();
                break;
            case "DETAILS":
                    instance = new Details();
                break;
            case "DFN":
                    instance = new Dfn();
                break;
            case "DIALOG":
                    instance = new Dialog();
                break;
            case "DIV":
                    instance = new Div();
                break;
            case "DL":
                    instance = new Dl();
                break;
            case "DT":
                    instance = new Dt();
                break;
            case "EM":
                    instance = new Em();
                break;
            case "EMBED":
                    instance = new Embed();
                break;
            case "FIELDSET":
                    instance = new Fieldset();
                break;
            case "FIGCAPTION":
                    instance = new Figcaption();
                break;
            case "FIGURE":
                    instance = new Figure();
                break;
            case "FOOTER":
                    instance = new Footer();
                break;
            case "FORM":
                    instance = new Form();
                break;
            case "H1":
                    instance = new H1();
                break;
            case "H2":
                    instance = new H2();
                break;
            case "H3":
                    instance = new H3();
                break;
            case "H4":
                    instance = new H4();
                break;
            case "H5":
                    instance = new H5();
                break;
            case "H6":
                    instance = new H6();
                break;
            case "HEAD":
                    instance = new Head();
                break;
            case "HEADER":
                    instance = new Header();
                break;
            case "I":
                    instance = new I();
                break;
            case "IFRAME":
                    instance = new Iframe();
                break;
            case "IMG":
                    instance = new Img();
                break;
            case "INPUT":
                    instance = new Input();
                break;
            case "INS":
                    instance = new Ins();
                break;
            case "KBD":
                    instance = new Kbd();
                break;
            case "KEYGEN":
                    instance = new Keygen();
                break;
            case "LABEL":
                    instance = new Label();
                break;
            case "LEYEND":
                    instance = new Leyend();
                break;
            case "LI":
                    instance = new Li();
                break;
            case "LINK":
                    instance = new Link();
                break;
            case "MAIN":
                    instance = new Main();
                break;
            //case "MAP":
                    //instance = new Map();
                //break;
            case "MENU":
                    instance = new Menu();
                break;
            case "MENUITEM":
                    instance = new Menuitem();
                break;
            case "META":
                    instance = new Meta();
                break;
            case "METER":
                    instance = new Meter();
                break;
            case "NAV":
                    instance = new Nav();
                break;
            case "NOSCRIP":
                    instance = new Noscrip();
                break;
            case "OBJECT":
                    instance = new Obj();
                break;
            case "OL":
                    instance = new Ol();
                break;
            case "OPTGROUP":
                    instance = new Optgroup();
                break;
            case "P":
                    instance = new P();
                break;
            case "PARAM":
                    instance = new Param();
                break;
            case "PRE":
                    instance = new Pre();
                break;
            case "PROGRESS":
                    instance = new Progress();
                break;
            case "Q":
                    instance = new Q();
                break;
            case "RP":
                    instance = new Rp();
                break;
            case "RT":
                    instance = new Rt();
                break;
            case "RUBY":
                    instance = new Ruby();
                break;
            case "S":
                    instance = new S();
                break;
            case "SAMP":
                    instance = new Samp();
                break;
            case "SCRIPT":
                    instance = new Script();
                break;
            case "SECTION":
                    instance = new Section();
                break;
            case "SELECT":
                    instance = new Select();
                break;
            case "SMALL":
                    instance = new Small();
                break;
            case "SOURCE":
                    instance = new Source();
                break;
            case "SPAN":
                    instance = new Span();
                break;
            case "STRONG":
                    instance = new Strong();
                break;
            case "STYLE":
                    instance = new Style();
                break;
            case "SUB":
                    instance = new Sub();
                break;
            case "SUMMARY":
                    instance = new Summary();
                break;
            case "SUP":
                    instance = new Sup();
                break;
            case "TABLE":
                    instance = new Table();
                break;
            case "TBODY":
                    instance = new Tbody();
                break;
            case "TD":
                    instance = new Td();
                break;
            case "TEXTAREA":
                    instance = new Textarea();
                break;
            case "TFOOT":
                    instance = new Tfoot();
                break;
            case "TH":
                    instance = new Th();
                break;
            case "THEAD":
                    instance = new Thead();
                break;
            case "TIME":
                    instance = new Time();
                break;
            case "TITLE":
                    instance = new Title();
                break;
            case "TR":
                    instance = new Tr();
                break;
            case "TRACK":
                    instance = new Track();
                break;
            case "U":
                    instance = new U();
                break;
            case "UL":
                    instance = new Ul();
                break;
            case "VAR":
                    instance = new Var();
                break;
            case "VIDEO":
                    instance = new Video();
                break;
            case "WBR":
                    instance = new Wbr();
                break;
            default:
                "";
                break;
        }
        instance.setElement(this.element);
        return instance;
    }
}
