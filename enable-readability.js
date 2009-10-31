// These don't make it through to the readability-injected <script> because
// of isolated worlds.  :~(
var readStyle='style-novel';
var readSize='size-medium';
var readMargin='margin-wide';

var _readability_script=document.createElement('SCRIPT');
_readability_script.type='text/javascript';
_readability_script.src=chrome.extension.getURL('readability/readability.js');
document.getElementsByTagName('head')[0].appendChild(_readability_script);
var _readability_css=document.createElement('LINK');
_readability_css.rel='stylesheet';
_readability_css.href=chrome.extension.getURL('readability/readability.css');
_readability_css.type='text/css';
_readability_css.media='screen';
document.getElementsByTagName('head')[0].appendChild(_readability_css);
var _readability_print_css=document.createElement('LINK');
_readability_print_css.rel='stylesheet';
_readability_print_css.href=chrome.extension.getURL('readability/readability-print.css');
_readability_print_css.media='print';
_readability_print_css.type='text/css';
document.getElementsByTagName('head')[0].appendChild(_readability_print_css);

