(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{150:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return c}));a(59),a(32),a(23),a(24),a(60),a(0);var n=a(166);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var i={id:"data",title:"Data Inputs",sidebar_label:"Data Inputs"},p=[{value:"Input Types",id:"input-types",children:[]},{value:"Data Sources",id:"data-sources",children:[{value:"Python Variables",id:"python-variables",children:[]},{value:"Plain text or ZIP file paths",id:"plain-text-or-zip-file-paths",children:[]}]},{value:"File Formats",id:"file-formats",children:[]}],l={rightToc:p},o="wrapper";function c(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(o,r({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"input-types"},"Input Types"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Sources: Source-side inputs for text generation tasks."),Object(n.b)("li",{parentName:"ul"},"References: Target-side references for text generation tasks."),Object(n.b)("li",{parentName:"ul"},"Hypothesis: Model predictions. One sentence per example per model."),Object(n.b)("li",{parentName:"ul"},"Tags: Per-example tags for example grouping. ")),Object(n.b)("h2",{id:"data-sources"},"Data Sources"),Object(n.b)("p",null,"VizSeq accepts data inputs in various ways."),Object(n.b)("h3",{id:"python-variables"},"Python Variables"),Object(n.b)("p",null,"VizSeq Jupyter notebook interface accepts Python list of lists of strings as inputs. The inner list is for multiple inputs of the same type, for example:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-python"}),"ref_1 = ['This is ref #1 for example #1.', 'This is ref #1 for example #2.']\nref_2 = ['This is ref #2 for example #1.', 'This is ref #2 for example #2.']\nref_3 = ['This is ref #3 for example #1.', 'This is ref #3 for example #2.']\nreferences = [ref_1, ref_2, ref_3]\n")),Object(n.b)("h3",{id:"plain-text-or-zip-file-paths"},"Plain text or ZIP file paths"),Object(n.b)("p",null,"VizSeq also accepts file paths. For example for Jupyter notebook:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-python"}),"references = ['ref_1.txt', 'ref_2.txt', 'ref_3.txt']\n")),Object(n.b)("p",null,"For the web App interface, it expects data to be organized in the following folder structure:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"[data_root]/[task_name]/src_*.txt\n[data_root]/[task_name]/src_*.zip\n[data_root]/[task_name]/ref_*.txt\n[data_root]/[task_name]/pred_*.txt\n[data_root]/[task_name]/tag_*.txt\n")),Object(n.b)("p",null,"where"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"src_*.txt"),": A text source, one sentence per line."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"src_*.zip"),": A packed source, with a ",Object(n.b)("inlineCode",{parentName:"li"},"source.txt")," in it, which provides either the sentences or the image/audio/video filenames per line."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"ref_*.txt"),": A text reference, one sentence per line."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"pred_*.txt"),": A text model prediction, one sentence per line."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"tag_*.txt"),": (Optional) Example tags, one phrase per line.")),Object(n.b)("h2",{id:"file-formats"},"File Formats"),Object(n.b)("h4",{id:"text"},"Text"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},".txt"),Object(n.b)("li",{parentName:"ul"},".txt in .zip")),Object(n.b)("h4",{id:"image-packed-in-zip"},"Image (packed in .zip)"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://en.wikipedia.org/wiki/JPEG"}),".jpg")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Portable_Network_Graphics"}),".png")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://en.wikipedia.org/wiki/GIF"}),".gif")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://en.wikipedia.org/wiki/BMP_file_format"}),".bmp"))),Object(n.b)("h4",{id:"audio-packed-in-zip"},"Audio (packed in .zip)"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://en.wikipedia.org/wiki/MP3"}),".mp3")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://en.wikipedia.org/wiki/WAV"}),".wav"))),Object(n.b)("h4",{id:"video-packed-in-zip"},"Video (packed in .zip)"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://en.wikipedia.org/wiki/MPEG-4_Part_14"}),".mp4")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://en.wikipedia.org/wiki/WebM"}),".webm"))))}c.isMDXComponent=!0},166:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return s}));var n=a(0),r=a.n(n),i=r.a.createContext({}),p=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},l=function(e){var t=p(e.components);return r.a.createElement(i.Provider,{value:t},e.children)};var o="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,o=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),b=p(a),s=n,u=b[l+"."+s]||b[s]||c[s]||i;return a?r.a.createElement(u,Object.assign({},{ref:t},o,{components:a})):r.a.createElement(u,Object.assign({},{ref:t},o))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,p=new Array(i);p[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[o]="string"==typeof e?e:n,p[1]=l;for(var s=2;s<i;s++)p[s]=a[s];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);