{
	"translatorID": "a515a220-6fef-45ea-9842-8025dfebcc8f",
	"label": "Better BibTeX Citation Key Quick Copy",
	"description": "exports citations to be copy-pasted into your LaTeX/Markdown /Org-mode/etc documents",
	"creator": "Emiliano heyns",
	"target": "txt",
	"minVersion": "4.0.27",
	"translatorType": 2,
	"browserSupport": "gcsv",
	"priority": 100,
	"displayOptions": {
		"quickCopyMode": ""
	},
	"inRepository": false,
	"configOptions": {
		"hash": "59802fd9d0ad1b3403f011975e4bffaaa69aa4e5dec29b6d4f9468b334959ee5"
	},
	"lastUpdated": "2023-09-22"
}

ZOTERO_CONFIG = {"GUID":"zotero@chnm.gmu.edu","ID":"zotero","CLIENT_NAME":"Zotero","DOMAIN_NAME":"zotero.org","PRODUCER":"Digital Scholar","PRODUCER_URL":"https://digitalscholar.org","REPOSITORY_URL":"https://repo.zotero.org/repo/","BASE_URI":"http://zotero.org/","WWW_BASE_URL":"https://www.zotero.org/","PROXY_AUTH_URL":"https://zoteroproxycheck.s3.amazonaws.com/test","API_URL":"https://api.zotero.org/","STREAMING_URL":"wss://stream.zotero.org/","SERVICES_URL":"https://services.zotero.org/","API_VERSION":3,"CONNECTOR_MIN_VERSION":"5.0.39","PREF_BRANCH":"extensions.zotero.","BOOKMARKLET_ORIGIN":"https://www.zotero.org","BOOKMARKLET_URL":"https://www.zotero.org/bookmarklet/","START_URL":"https://www.zotero.org/start","QUICK_START_URL":"https://www.zotero.org/support/quick_start_guide","PDF_TOOLS_URL":"https://www.zotero.org/download/xpdf/","SUPPORT_URL":"https://www.zotero.org/support/","SYNC_INFO_URL":"https://www.zotero.org/support/sync","TROUBLESHOOTING_URL":"https://www.zotero.org/support/getting_help","FEEDBACK_URL":"https://forums.zotero.org/","CONNECTORS_URL":"https://www.zotero.org/download/connectors","CHANGELOG_URL":"https://www.zotero.org/support/changelog","CREDITS_URL":"https://www.zotero.org/support/credits_and_acknowledgments","LICENSING_URL":"https://www.zotero.org/support/licensing","GET_INVOLVED_URL":"https://www.zotero.org/getinvolved","DICTIONARIES_URL":"https://download.zotero.org/dictionaries/"}

        if (typeof ZOTERO_TRANSLATOR_INFO === 'undefined') var ZOTERO_TRANSLATOR_INFO = {}; // declare if not declared
        Object.assign(ZOTERO_TRANSLATOR_INFO, {"translatorID":"a515a220-6fef-45ea-9842-8025dfebcc8f","label":"Better BibTeX Citation Key Quick Copy","description":"exports citations to be copy-pasted into your LaTeX/Markdown /Org-mode/etc documents","creator":"Emiliano heyns","target":"txt","minVersion":"4.0.27","translatorType":2,"browserSupport":"gcsv","priority":100,"displayOptions":{"quickCopyMode":""},"inRepository":false}); // assign new data
      
var { doExport } = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // translators/Better BibTeX Citation Key Quick Copy.ts
  var Better_BibTeX_Citation_Key_Quick_Copy_exports = {};
  __export(Better_BibTeX_Citation_Key_Quick_Copy_exports, {
    doExport: () => doExport
  });

  // content/client.ts
  var is7 = typeof location !== "undefined" && location.search ? new URLSearchParams(location.search).get("is7") === "true" : Zotero.platformMajorVersion >= 102;
  function clientname() {
    var _a;
    if (typeof location !== "undefined" && location.search)
      return new URLSearchParams(location.search).get("clientName");
    if (Zotero.clientName)
      return Zotero.clientName;
    if ((_a = Zotero.BetterBibTeX) == null ? void 0 : _a.clientName)
      return Zotero.BetterBibTeX.clientName;
    throw new Error("Unable to detect clientName");
  }
  var clientName = clientname();
  var client = clientName.toLowerCase().replace("-", "");

  // gen/items/simplify.ts
  var zotero = client === "zotero";
  var jurism = !zotero;
  function unalias(item, { scrub = true } = {}) {
    delete item.inPublications;
    let v;
    if (v = item.dateDecided || item.issueDate || item.dateEnacted)
      item.date = v;
    if (scrub) {
      delete item.dateDecided;
      delete item.issueDate;
      delete item.dateEnacted;
    }
    if (v = item.artworkMedium || item.audioRecordingFormat || item.videoRecordingFormat || item.interviewMedium || item.audioFileType)
      item.medium = v;
    if (scrub) {
      delete item.artworkMedium;
      delete item.audioRecordingFormat;
      delete item.videoRecordingFormat;
      delete item.interviewMedium;
      delete item.audioFileType;
    }
    if (v = item.billNumber || item.docketNumber || item.patentNumber || item.episodeNumber || item.reportNumber || item.publicLawNumber)
      item.number = v;
    if (scrub) {
      delete item.billNumber;
      delete item.docketNumber;
      delete item.patentNumber;
      delete item.episodeNumber;
      delete item.reportNumber;
      delete item.publicLawNumber;
    }
    if (v = item.codePages || item.firstPage)
      item.pages = v;
    if (scrub) {
      delete item.codePages;
      delete item.firstPage;
    }
    if (v = item.blogTitle || item.bookTitle || item.proceedingsTitle || item.dictionaryTitle || item.encyclopediaTitle || item.forumTitle || item.programTitle || item.websiteTitle)
      item.publicationTitle = v;
    if (scrub) {
      delete item.blogTitle;
      delete item.bookTitle;
      delete item.proceedingsTitle;
      delete item.dictionaryTitle;
      delete item.encyclopediaTitle;
      delete item.forumTitle;
      delete item.programTitle;
      delete item.websiteTitle;
    }
    if (v = item.label || item.company || item.distributor || item.network || item.university || item.studio)
      item.publisher = v;
    if (scrub) {
      delete item.label;
      delete item.company;
      delete item.distributor;
      delete item.network;
      delete item.university;
      delete item.studio;
    }
    if (v = item.caseName || item.subject || item.nameOfAct)
      item.title = v;
    if (scrub) {
      delete item.caseName;
      delete item.subject;
      delete item.nameOfAct;
    }
    if (v = item.websiteType || item.genre || item.postType || item.letterType || item.manuscriptType || item.mapType || item.presentationType || item.reportType || item.thesisType)
      item.type = v;
    if (scrub) {
      delete item.websiteType;
      delete item.genre;
      delete item.postType;
      delete item.letterType;
      delete item.manuscriptType;
      delete item.mapType;
      delete item.presentationType;
      delete item.reportType;
      delete item.thesisType;
    }
    if (v = item.codeVolume || item.reporterVolume)
      item.volume = v;
    if (scrub) {
      delete item.codeVolume;
      delete item.reporterVolume;
    }
    if (zotero) {
      if (v = item.legislativeBody || item.court || item.issuingAuthority || item.organization)
        item.authority = v;
      if (scrub) {
        delete item.legislativeBody;
        delete item.court;
        delete item.issuingAuthority;
        delete item.organization;
      }
      if (item.format)
        item.medium = item.format;
      if (scrub) {
        delete item.format;
      }
      if (v = item.identifier || item.documentNumber || item.archiveID)
        item.number = v;
      if (scrub) {
        delete item.identifier;
        delete item.documentNumber;
        delete item.archiveID;
      }
      if (item.repositoryLocation)
        item.place = item.repositoryLocation;
      if (scrub) {
        delete item.repositoryLocation;
      }
      if (v = item.repository || item.institution)
        item.publisher = v;
      if (scrub) {
        delete item.repository;
        delete item.institution;
      }
      if (item.legalStatus)
        item.status = item.legalStatus;
      if (scrub) {
        delete item.legalStatus;
      }
    }
    if (jurism) {
      if (item.release)
        item.edition = item.release;
      if (scrub) {
        delete item.release;
      }
      if (item.bookAbbreviation)
        item.journalAbbreviation = item.bookAbbreviation;
      if (scrub) {
        delete item.bookAbbreviation;
      }
      if (item.regulatoryBody)
        item.legislativeBody = item.regulatoryBody;
      if (scrub) {
        delete item.regulatoryBody;
      }
      if (item.treatyNumber)
        item.number = item.treatyNumber;
      if (scrub) {
        delete item.treatyNumber;
      }
      if (v = item.album || item.reporter)
        item.publicationTitle = v;
      if (scrub) {
        delete item.album;
        delete item.reporter;
      }
      if (item.assemblyNumber)
        item.seriesNumber = item.assemblyNumber;
      if (scrub) {
        delete item.assemblyNumber;
      }
      if (v = item.sessionType || item.regulationType)
        item.type = v;
      if (scrub) {
        delete item.sessionType;
        delete item.regulationType;
      }
    }
  }
  function simplifyForExport(item, { creators = true, dropAttachments = false, scrub = true } = {}) {
    unalias(item, { scrub });
    if (item.filingDate)
      item.filingDate = item.filingDate.replace(/^0000-00-00 /, "");
    if (creators && item.creators) {
      for (const creator of item.creators) {
        if (creator.fieldMode) {
          creator.name = creator.name || creator.lastName;
          delete creator.lastName;
          delete creator.firstName;
          delete creator.fieldMode;
        }
      }
    }
    if (item.itemType === "attachment" || item.itemType === "note") {
      delete item.attachments;
      delete item.notes;
    } else {
      item.attachments = !dropAttachments && item.attachments || [];
    }
    return item;
  }

  // setup/shims/path.js
  function join() {
    return OS.Path.join(...arguments);
  }
  function dirname(filename) {
    return OS.Path.dirname(filename);
  }
  function extname(filename) {
    return filename.includes(".") ? "." + filename.split(".").pop() : "";
  }

  // setup/shims/fs.js
  function readFileSync(filename) {
    if (filename.match(/^(resource|chrome):/))
      return Zotero.File.getContentsFromURL(filename);
    throw new Exception(`could not read ${JSON.stringify(filename)}`);
  }

  // node_modules/eta/dist/eta.module.mjs
  var Cacher = class {
    constructor(cache) {
      this.cache = void 0;
      this.cache = cache;
    }
    define(key, val) {
      this.cache[key] = val;
    }
    get(key) {
      return this.cache[key];
    }
    remove(key) {
      delete this.cache[key];
    }
    reset() {
      this.cache = {};
    }
    load(cacheObj) {
      this.cache = {
        ...this.cache,
        ...cacheObj
      };
    }
  };
  var EtaError = class extends Error {
    constructor(message) {
      super(message);
      this.name = "Eta Error";
    }
  };
  function ParseErr(message, str, indx) {
    const whitespace = str.slice(0, indx).split(/\n/);
    const lineNo = whitespace.length;
    const colNo = whitespace[lineNo - 1].length + 1;
    message += " at line " + lineNo + " col " + colNo + ":\n\n  " + str.split(/\n/)[lineNo - 1] + "\n  " + Array(colNo).join(" ") + "^";
    throw new EtaError(message);
  }
  function RuntimeErr(originalError, str, lineNo, path) {
    const lines = str.split("\n");
    const start = Math.max(lineNo - 3, 0);
    const end = Math.min(lines.length, lineNo + 3);
    const filename = path;
    const context = lines.slice(start, end).map(function(line, i) {
      const curr = i + start + 1;
      return (curr == lineNo ? " >> " : "    ") + curr + "| " + line;
    }).join("\n");
    const header = filename ? filename + ":" + lineNo + "\n" : "line " + lineNo + "\n";
    const err = new EtaError(header + context + "\n\n" + originalError.message);
    err.name = originalError.name;
    throw err;
  }
  var AsyncFunction = async function() {
  }.constructor;
  function compile(str, options) {
    const config = this.config;
    const ctor = options && options.async ? AsyncFunction : Function;
    try {
      return new ctor(config.varName, "options", this.compileToString.call(this, str, options));
    } catch (e) {
      if (e instanceof SyntaxError) {
        throw new EtaError(
          "Bad template syntax\n\n" + e.message + "\n" + Array(e.message.length + 1).join("=") + "\n" + this.compileToString.call(this, str, options) + "\n"
          // This will put an extra newline before the callstack for extra readability
        );
      } else {
        throw e;
      }
    }
  }
  function compileToString(str, options) {
    const config = this.config;
    const isAsync = options && options.async;
    const compileBody2 = this.compileBody;
    const buffer = this.parse.call(this, str);
    let res = `${config.functionHeader}
let include = (template, data) => this.render(template, data, options);
let includeAsync = (template, data) => this.renderAsync(template, data, options);

let __eta = {res: "", e: this.config.escapeFunction, f: this.config.filterFunction${config.debug ? ', line: 1, templateStr: "' + str.replace(/\\|"/g, "\\$&").replace(/\r\n|\n|\r/g, "\\n") + '"' : ""}};

function layout(path, data) {
  __eta.layout = path;
  __eta.layoutData = data;
}${config.debug ? "try {" : ""}${config.useWith ? "with(" + config.varName + "||{}){" : ""}

${compileBody2.call(this, buffer)}
if (__eta.layout) {
  __eta.res = ${isAsync ? "await includeAsync" : "include"} (__eta.layout, {...${config.varName}, body: __eta.res, ...__eta.layoutData});
}
${config.useWith ? "}" : ""}${config.debug ? "} catch (e) { this.RuntimeErr(e, __eta.templateStr, __eta.line, options.filepath) }" : ""}
return __eta.res;
`;
    if (config.plugins) {
      for (let i = 0; i < config.plugins.length; i++) {
        const plugin = config.plugins[i];
        if (plugin.processFnString) {
          res = plugin.processFnString(res, config);
        }
      }
    }
    return res;
  }
  function compileBody(buff) {
    const config = this.config;
    let i = 0;
    const buffLength = buff.length;
    let returnStr = "";
    for (i; i < buffLength; i++) {
      const currentBlock = buff[i];
      if (typeof currentBlock === "string") {
        const str = currentBlock;
        returnStr += "__eta.res+='" + str + "'\n";
      } else {
        const type = currentBlock.t;
        let content = currentBlock.val || "";
        if (config.debug)
          returnStr += "__eta.line=" + currentBlock.lineNo + "\n";
        if (type === "r") {
          if (config.autoFilter) {
            content = "__eta.f(" + content + ")";
          }
          returnStr += "__eta.res+=" + content + "\n";
        } else if (type === "i") {
          if (config.autoFilter) {
            content = "__eta.f(" + content + ")";
          }
          if (config.autoEscape) {
            content = "__eta.e(" + content + ")";
          }
          returnStr += "__eta.res+=" + content + "\n";
        } else if (type === "e") {
          returnStr += content + "\n";
        }
      }
    }
    return returnStr;
  }
  function trimWS(str, config, wsLeft, wsRight) {
    let leftTrim;
    let rightTrim;
    if (Array.isArray(config.autoTrim)) {
      leftTrim = config.autoTrim[1];
      rightTrim = config.autoTrim[0];
    } else {
      leftTrim = rightTrim = config.autoTrim;
    }
    if (wsLeft || wsLeft === false) {
      leftTrim = wsLeft;
    }
    if (wsRight || wsRight === false) {
      rightTrim = wsRight;
    }
    if (!rightTrim && !leftTrim) {
      return str;
    }
    if (leftTrim === "slurp" && rightTrim === "slurp") {
      return str.trim();
    }
    if (leftTrim === "_" || leftTrim === "slurp") {
      str = str.trimStart();
    } else if (leftTrim === "-" || leftTrim === "nl") {
      str = str.replace(/^(?:\r\n|\n|\r)/, "");
    }
    if (rightTrim === "_" || rightTrim === "slurp") {
      str = str.trimEnd();
    } else if (rightTrim === "-" || rightTrim === "nl") {
      str = str.replace(/(?:\r\n|\n|\r)$/, "");
    }
    return str;
  }
  var escMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  };
  function replaceChar(s) {
    return escMap[s];
  }
  function XMLEscape(str) {
    const newStr = String(str);
    if (/[&<>"']/.test(newStr)) {
      return newStr.replace(/[&<>"']/g, replaceChar);
    } else {
      return newStr;
    }
  }
  var defaultConfig = {
    autoEscape: true,
    autoFilter: false,
    autoTrim: [false, "nl"],
    cache: false,
    cacheFilepaths: true,
    debug: false,
    escapeFunction: XMLEscape,
    // default filter function (not used unless enables) just stringifies the input
    filterFunction: (val) => String(val),
    functionHeader: "",
    parse: {
      exec: "",
      interpolate: "=",
      raw: "~"
    },
    plugins: [],
    rmWhitespace: false,
    tags: ["<%", "%>"],
    useWith: false,
    varName: "it"
  };
  var templateLitReg = /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})*}|(?!\${)[^\\`])*`/g;
  var singleQuoteReg = /'(?:\\[\s\w"'\\`]|[^\n\r'\\])*?'/g;
  var doubleQuoteReg = /"(?:\\[\s\w"'\\`]|[^\n\r"\\])*?"/g;
  function escapeRegExp(string) {
    return string.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
  }
  function getLineNo(str, index) {
    return str.slice(0, index).split("\n").length;
  }
  function parse(str) {
    const config = this.config;
    let buffer = [];
    let trimLeftOfNextStr = false;
    let lastIndex = 0;
    const parseOptions = config.parse;
    if (config.plugins) {
      for (let i = 0; i < config.plugins.length; i++) {
        const plugin = config.plugins[i];
        if (plugin.processTemplate) {
          str = plugin.processTemplate(str, config);
        }
      }
    }
    if (config.rmWhitespace) {
      str = str.replace(/[\r\n]+/g, "\n").replace(/^\s+|\s+$/gm, "");
    }
    templateLitReg.lastIndex = 0;
    singleQuoteReg.lastIndex = 0;
    doubleQuoteReg.lastIndex = 0;
    function pushString(strng, shouldTrimRightOfString) {
      if (strng) {
        strng = trimWS(
          strng,
          config,
          trimLeftOfNextStr,
          // this will only be false on the first str, the next ones will be null or undefined
          shouldTrimRightOfString
        );
        if (strng) {
          strng = strng.replace(/\\|'/g, "\\$&").replace(/\r\n|\n|\r/g, "\\n");
          buffer.push(strng);
        }
      }
    }
    const prefixes = [parseOptions.exec, parseOptions.interpolate, parseOptions.raw].reduce(function(accumulator, prefix) {
      if (accumulator && prefix) {
        return accumulator + "|" + escapeRegExp(prefix);
      } else if (prefix) {
        return escapeRegExp(prefix);
      } else {
        return accumulator;
      }
    }, "");
    const parseOpenReg = new RegExp(escapeRegExp(config.tags[0]) + "(-|_)?\\s*(" + prefixes + ")?\\s*", "g");
    const parseCloseReg = new RegExp("'|\"|`|\\/\\*|(\\s*(-|_)?" + escapeRegExp(config.tags[1]) + ")", "g");
    let m;
    while (m = parseOpenReg.exec(str)) {
      const precedingString = str.slice(lastIndex, m.index);
      lastIndex = m[0].length + m.index;
      const wsLeft = m[1];
      const prefix = m[2] || "";
      pushString(precedingString, wsLeft);
      parseCloseReg.lastIndex = lastIndex;
      let closeTag;
      let currentObj = false;
      while (closeTag = parseCloseReg.exec(str)) {
        if (closeTag[1]) {
          const content = str.slice(lastIndex, closeTag.index);
          parseOpenReg.lastIndex = lastIndex = parseCloseReg.lastIndex;
          trimLeftOfNextStr = closeTag[2];
          const currentType = prefix === parseOptions.exec ? "e" : prefix === parseOptions.raw ? "r" : prefix === parseOptions.interpolate ? "i" : "";
          currentObj = {
            t: currentType,
            val: content
          };
          break;
        } else {
          const char = closeTag[0];
          if (char === "/*") {
            const commentCloseInd = str.indexOf("*/", parseCloseReg.lastIndex);
            if (commentCloseInd === -1) {
              ParseErr("unclosed comment", str, closeTag.index);
            }
            parseCloseReg.lastIndex = commentCloseInd;
          } else if (char === "'") {
            singleQuoteReg.lastIndex = closeTag.index;
            const singleQuoteMatch = singleQuoteReg.exec(str);
            if (singleQuoteMatch) {
              parseCloseReg.lastIndex = singleQuoteReg.lastIndex;
            } else {
              ParseErr("unclosed string", str, closeTag.index);
            }
          } else if (char === '"') {
            doubleQuoteReg.lastIndex = closeTag.index;
            const doubleQuoteMatch = doubleQuoteReg.exec(str);
            if (doubleQuoteMatch) {
              parseCloseReg.lastIndex = doubleQuoteReg.lastIndex;
            } else {
              ParseErr("unclosed string", str, closeTag.index);
            }
          } else if (char === "`") {
            templateLitReg.lastIndex = closeTag.index;
            const templateLitMatch = templateLitReg.exec(str);
            if (templateLitMatch) {
              parseCloseReg.lastIndex = templateLitReg.lastIndex;
            } else {
              ParseErr("unclosed string", str, closeTag.index);
            }
          }
        }
      }
      if (currentObj) {
        if (config.debug) {
          currentObj.lineNo = getLineNo(str, m.index);
        }
        buffer.push(currentObj);
      } else {
        ParseErr("unclosed tag", str, m.index);
      }
    }
    pushString(str.slice(lastIndex, str.length), false);
    if (config.plugins) {
      for (let i = 0; i < config.plugins.length; i++) {
        const plugin = config.plugins[i];
        if (plugin.processAST) {
          buffer = plugin.processAST(buffer, config);
        }
      }
    }
    return buffer;
  }
  function handleCache(template, options) {
    const templateStore = options && options.async ? this.templatesAsync : this.templatesSync;
    if (this.resolvePath && this.readFile && !template.startsWith("@")) {
      const templatePath = options.filepath;
      const cachedTemplate = templateStore.get(templatePath);
      if (this.config.cache && cachedTemplate) {
        return cachedTemplate;
      } else {
        const templateString = this.readFile(templatePath);
        const templateFn = this.compile(templateString, options);
        if (this.config.cache)
          templateStore.define(templatePath, templateFn);
        return templateFn;
      }
    } else {
      const cachedTemplate = templateStore.get(template);
      if (cachedTemplate) {
        return cachedTemplate;
      } else {
        throw new EtaError("Failed to get template '" + template + "'");
      }
    }
  }
  function render(template, data, meta) {
    let templateFn;
    const options = {
      ...meta,
      async: false
    };
    if (typeof template === "string") {
      if (this.resolvePath && this.readFile && !template.startsWith("@")) {
        options.filepath = this.resolvePath(template, options);
      }
      templateFn = handleCache.call(this, template, options);
    } else {
      templateFn = template;
    }
    const res = templateFn.call(this, data, options);
    return res;
  }
  function renderAsync(template, data, meta) {
    let templateFn;
    const options = {
      ...meta,
      async: true
    };
    if (typeof template === "string") {
      if (this.resolvePath && this.readFile && !template.startsWith("@")) {
        options.filepath = this.resolvePath(template, options);
      }
      templateFn = handleCache.call(this, template, options);
    } else {
      templateFn = template;
    }
    const res = templateFn.call(this, data, options);
    return Promise.resolve(res);
  }
  function renderString(template, data) {
    const templateFn = this.compile(template, {
      async: false
    });
    return render.call(this, templateFn, data);
  }
  function renderStringAsync(template, data) {
    const templateFn = this.compile(template, {
      async: true
    });
    return renderAsync.call(this, templateFn, data);
  }
  var Eta$1 = class {
    constructor(customConfig) {
      this.config = void 0;
      this.RuntimeErr = RuntimeErr;
      this.compile = compile;
      this.compileToString = compileToString;
      this.compileBody = compileBody;
      this.parse = parse;
      this.render = render;
      this.renderAsync = renderAsync;
      this.renderString = renderString;
      this.renderStringAsync = renderStringAsync;
      this.filepathCache = {};
      this.templatesSync = new Cacher({});
      this.templatesAsync = new Cacher({});
      this.resolvePath = null;
      this.readFile = null;
      if (customConfig) {
        this.config = {
          ...defaultConfig,
          ...customConfig
        };
      } else {
        this.config = {
          ...defaultConfig
        };
      }
    }
    // METHODS
    configure(customConfig) {
      this.config = {
        ...this.config,
        ...customConfig
      };
    }
    withConfig(customConfig) {
      return {
        ...this,
        config: {
          ...this.config,
          ...customConfig
        }
      };
    }
    loadTemplate(name, template, options) {
      if (typeof template === "string") {
        const templates = options && options.async ? this.templatesAsync : this.templatesSync;
        templates.define(name, this.compile(template, options));
      } else {
        let templates = this.templatesSync;
        if (template.constructor.name === "AsyncFunction" || options && options.async) {
          templates = this.templatesAsync;
        }
        templates.define(name, template);
      }
    }
  };
  function readFile(path) {
    let res = "";
    try {
      res = readFileSync(path, "utf8");
    } catch (err) {
      if ((err == null ? void 0 : err.code) === "ENOENT") {
        throw new EtaError(`Could not find template: ${path}`);
      } else {
        throw err;
      }
    }
    return res;
  }
  function resolvePath(templatePath, options) {
    let resolvedFilePath = "";
    const views = this.config.views;
    if (!views) {
      throw new EtaError("Views directory is not defined");
    }
    const baseFilePath = options && options.filepath;
    const cacheIndex = JSON.stringify({
      filename: baseFilePath,
      path: templatePath,
      views: this.config.views
    });
    templatePath += extname(templatePath) ? "" : ".eta";
    if (baseFilePath) {
      if (this.config.cacheFilepaths && this.filepathCache[cacheIndex]) {
        return this.filepathCache[cacheIndex];
      }
      const absolutePathTest = absolutePathRegExp.exec(templatePath);
      if (absolutePathTest && absolutePathTest.length) {
        const formattedPath = templatePath.replace(/^\/*|^\\*/, "");
        resolvedFilePath = join(views, formattedPath);
      } else {
        resolvedFilePath = join(dirname(baseFilePath), templatePath);
      }
    } else {
      resolvedFilePath = join(views, templatePath);
    }
    if (dirIsChild(views, resolvedFilePath)) {
      if (baseFilePath && this.config.cacheFilepaths) {
        this.filepathCache[cacheIndex] = resolvedFilePath;
      }
      return resolvedFilePath;
    } else {
      throw new EtaError(`Template '${templatePath}' is not in the views directory`);
    }
  }
  function dirIsChild(parent, dir) {
    const relative2 = (void 0)(parent, dir);
    return relative2 && !relative2.startsWith("..") && !(void 0)(relative2);
  }
  var absolutePathRegExp = /^\\|^\//;
  var Eta = class extends Eta$1 {
    constructor(...args) {
      super(...args);
      this.readFile = readFile;
      this.resolvePath = resolvePath;
    }
  };

  // translators/Better BibTeX Citation Key Quick Copy.ts
  var eta = new Eta({ autoEscape: false });
  function select_by_key(item) {
    const [, kind, lib, key] = item.uri.match(/^https?:\/\/zotero\.org\/(users|groups)\/((?:local\/)?[^/]+)\/items\/(.+)/);
    return kind === "users" ? `zotero://select/library/items/${key}` : `zotero://select/groups/${lib}/items/${key}`;
  }
  function select_by_citekey(item) {
    return `zotero://select/items/@${encodeURIComponent(item.citationKey)}`;
  }
  var Mode = {
    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    gitbook(items) {
      const citations = items.map((item) => `{{ "${item.citationKey}" | cite }}`);
      Zotero.write(citations.join(""));
    },
    latex(items) {
      const keys = items.map((item) => item.citationKey);
      const cmd = `${Zotero.getHiddenPref("better-bibtex.citeCommand")}`.trim();
      if (cmd === "") {
        Zotero.write(keys.join(","));
      } else {
        Zotero.write(`\\${cmd}{${keys.join(", ")}}`);
      }
    },
    citekeys(items) {
      const keys = items.map((item) => item.citationKey);
      Zotero.write(keys.join(", "));
    },
    pandoc(items) {
      let keys = items.map((item) => `@${item.citationKey}`);
      keys = keys.join("; ");
      if (Zotero.getHiddenPref("better-bibtex.quickCopyPandocBrackets"))
        keys = `[${keys}]`;
      Zotero.write(keys);
    },
    roamCiteKey(items) {
      let keys = items.map((item) => `[[@${item.citationKey}]]`);
      keys = keys.join(" ");
      Zotero.write(keys);
    },
    orgRef(items) {
      if (!items.length)
        return "";
      Zotero.write(`cite:${items.map((item) => item.citationKey).join(", ")}`);
    },
    orgRef3(items) {
      if (!items.length)
        return "";
      Zotero.write(`cite:&${items.map((item) => item.citationKey).join(";&")}`);
    },
    orgmode(items) {
      switch (Zotero.getHiddenPref("better-bibtex.quickCopyOrgMode")) {
        case "zotero":
          for (const item of items) {
            Zotero.write(`[[${select_by_key(item)}][@${item.citationKey}]]`);
          }
          break;
        case "citationkey":
          for (const item of items) {
            Zotero.write(`[[${select_by_citekey(item)}][@${item.citationKey}]]`);
          }
          break;
      }
    },
    selectlink(items) {
      switch (Zotero.getHiddenPref("better-bibtex.quickCopySelectLink")) {
        case "zotero":
          Zotero.write(items.map(select_by_key).join("\n"));
          break;
        case "citationkey":
          Zotero.write(items.map(select_by_citekey).join("\n"));
          break;
      }
    },
    rtfScan(items) {
      const reference = items.map((item) => {
        const ref = [];
        const creators = item.creators || [];
        const creator = creators[0] || {};
        let name = creator.name || creator.lastName || "no author";
        if (creators.length > 1)
          name += " et al.";
        ref.push(name);
        if (item.title)
          ref.push(JSON.stringify(item.title));
        if (item.date) {
          let date = Zotero.BetterBibTeX.parseDate(item.date);
          if (date.type === "interval")
            date = date.from;
          if (date.type === "verbatim" || !date.year) {
            ref.push(item.date);
          } else {
            ref.push(date.year);
          }
        } else {
          ref.push("no date");
        }
        return ref.join(", ");
      });
      Zotero.write(`{${reference.join("; ")}}`);
    },
    eta(items) {
      try {
        Zotero.write(eta.renderString(Zotero.getHiddenPref("better-bibtex.quickCopyEta"), { items: items.map(simplifyForExport) }));
      } catch (err) {
        Zotero.write(`${err}`);
      }
    }
  };
  function doExport() {
    const items = [];
    let item;
    while (item = Zotero.nextItem()) {
      if (item.citationKey)
        items.push(item);
    }
    items.sort((a, b) => {
      const ka = [a.citationKey || a.itemType, a.dateModified || a.dateAdded, a.itemID].join("	");
      const kb = [b.citationKey || b.itemType, b.dateModified || b.dateAdded, b.itemID].join("	");
      return ka.localeCompare(kb, void 0, { sensitivity: "base" });
    });
    const mode = Mode[Zotero.getOption("quickCopyMode")] || Mode[Zotero.getHiddenPref("better-bibtex.quickCopyMode")];
    if (mode) {
      mode.call(null, items);
    } else {
      throw new Error(`Unsupported Quick Copy format '${Zotero.getOption("quickCopyMode") || Zotero.getHiddenPref("better-bibtex.quickCopyMode")}', I only know about: ${Object.keys(Mode).join(", ")}`);
    }
  }
  return __toCommonJS(Better_BibTeX_Citation_Key_Quick_Copy_exports);
})();
