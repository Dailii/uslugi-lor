Drupal.locale = { 'pluralFormula': function ($n) { return Number((((($n%10)==1)&&(($n%100)!=11))?(0):((((($n%10)>=2)&&(($n%10)<=4))&&((($n%100)<10)||(($n%100)>=20)))?(1):2))); }, 'strings': {"":{"Next":"\u0414\u0430\u043b\u0435\u0435","Cancel":"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c","Disabled":"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u043e","Enabled":"\u0412\u043a\u043b\u044e\u0447\u0435\u043d\u043e","Edit":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c","none":"\u043d\u0435\u0442","Sunday":"\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435","Monday":"\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a","Tuesday":"\u0432\u0442\u043e\u0440\u043d\u0438\u043a","Wednesday":"\u0441\u0440\u0435\u0434\u0430","Thursday":"\u0447\u0435\u0442\u0432\u0435\u0440\u0433","Friday":"\u043f\u044f\u0442\u043d\u0438\u0446\u0430","Saturday":"\u0441\u0443\u0431\u0431\u043e\u0442\u0430","Add":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c","Configure":"\u041d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c","Done":"\u0413\u043e\u0442\u043e\u0432\u043e","OK":"\u041e\u041a","Prev":"\u041d\u0430\u0437\u0430\u0434","Mon":"\u043f\u043d","Tue":"\u0432\u0442","Wed":"\u0441\u0440","Thu":"\u0447\u0442","Fri":"\u043f\u0442","Sat":"\u0441\u0431","Sun":"\u0432\u0441","January":"\u044f\u043d\u0432\u0430\u0440\u044f","February":"\u0444\u0435\u0432\u0440\u0430\u043b\u044f","March":"\u043c\u0430\u0440\u0442\u0430","April":"\u0430\u043f\u0440\u0435\u043b\u044f","May":"\u043c\u0430\u044f","June":"\u0438\u044e\u043d\u044f","July":"\u0438\u044e\u043b\u044f","August":"\u0430\u0432\u0433\u0443\u0441\u0442\u0430","September":"\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f","October":"\u043e\u043a\u0442\u044f\u0431\u0440\u044f","November":"\u043d\u043e\u044f\u0431\u0440\u044f","December":"\u0434\u0435\u043a\u0430\u0431\u0440\u044f","Show":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c","Select all rows in this table":"\u041e\u0442\u043c\u0435\u0442\u0438\u0442\u044c \u0432\u0441\u0435 \u0441\u0442\u0440\u043e\u043a\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u044b","Deselect all rows in this table":"\u0421\u043d\u044f\u0442\u044c \u043e\u0442\u043c\u0435\u0442\u043a\u0443 \u0441\u043e \u0432\u0441\u0435\u0445 \u043a\u043e\u043b\u043e\u043d\u043e\u043a \u0442\u0430\u0431\u043b\u0438\u0446\u044b","Today":"\u0421\u0435\u0433\u043e\u0434\u043d\u044f","Jan":"\u042f\u043d\u0432","Feb":"\u0424\u0435\u0432","Mar":"\u041c\u0430\u0440","Apr":"\u0410\u043f\u0440","Jun":"\u0418\u044e\u043d","Jul":"\u0418\u044e\u043b","Aug":"\u0410\u0432\u0433","Sep":"\u0421\u0435\u043d","Oct":"\u041e\u043a\u0442","Nov":"\u041d\u043e\u044f","Dec":"\u0414\u0435\u043a","Su":"\u0412\u0441","Mo":"\u041f\u043d","Tu":"\u0412\u0442","We":"\u0421\u0440","Th":"\u0427\u0442","Fr":"\u041f\u0442","Sa":"\u0421\u0431","Not published":"\u041d\u0435 \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u043e","Please wait...":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435...","Hide":"\u0421\u043a\u0440\u044b\u0442\u044c","Loading":"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430","mm\/dd\/yy":"mm\/dd\/yy","Not enabled":"\u0412\u044b\u043a\u043b\u044e\u0447\u0435\u043d\u043e","By @name on @date":"@name, @date","By @name":"@name","Not in menu":"\u041d\u0435 \u0432 \u043c\u0435\u043d\u044e","Alias: @alias":"\u0421\u0438\u043d\u043e\u043d\u0438\u043c: @alias","No alias":"\u0421\u0438\u043d\u043e\u043d\u0438\u043c \u043d\u0435 \u0437\u0430\u0434\u0430\u043d","New revision":"\u041d\u043e\u0432\u0430\u044f \u0440\u0435\u0434\u0430\u043a\u0446\u0438\u044f","Drag to re-order":"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u043e\u0440\u044f\u0434\u043e\u043a \u043c\u043e\u0436\u043d\u043e, \u043f\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0432 \u043f\u0443\u043d\u043a\u0442 \u043c\u044b\u0448\u043a\u043e\u0439.","Changes made in this table will not be saved until the form is submitted.":"\u0421\u0434\u0435\u043b\u0430\u043d\u043d\u044b\u0435 \u0432 \u0441\u043f\u0438\u0441\u043a\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043d\u0435 \u0432\u0441\u0442\u0443\u043f\u044f\u0442 \u0432 \u0441\u0438\u043b\u0443, \u043f\u043e\u043a\u0430 \u0432\u044b \u043d\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u0435 \u0438\u0445.","The changes to these blocks will not be saved until the \u003Cem\u003ESave blocks\u003C\/em\u003E button is clicked.":"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f, \u0441\u0434\u0435\u043b\u0430\u043d\u043d\u044b\u0435 \u0432 \u0431\u043b\u043e\u043a\u0430\u0445 \u043d\u0435 \u0432\u0441\u0442\u0443\u043f\u044f\u0442 \u0432 \u0441\u0438\u043b\u0443 \u043f\u043e\u043a\u0430 \u0432\u044b \u043d\u0435 \u043d\u0430\u0436\u043c\u0435\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 \u003Cem\u003E\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0431\u043b\u043e\u043a\u0438\u003C\/em\u003E.","Show shortcuts":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0441\u043e\u0447\u0435\u0442\u0430\u043d\u0438\u044f \u043a\u043b\u0430\u0432\u0438\u0448","This permission is inherited from the authenticated user role.":"\u042d\u0442\u043e \u043f\u0440\u0430\u0432\u043e \u043d\u0430\u0441\u043b\u0435\u0434\u0443\u0435\u0442\u0441\u044f \u043e\u0442 \u0440\u043e\u043b\u0438 \u00ab\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u00bb.","No revision":"\u041d\u0435\u0442 \u0440\u0435\u0434\u0430\u043a\u0446\u0438\u0438","@number comments per page":"@number \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0435\u0432 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443","Requires a title":"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a","Not restricted":"\u0411\u0435\u0437 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0439","(active tab)":"(\u0430\u043a\u0442\u0438\u0432\u043d\u0430\u044f \u0432\u043a\u043b\u0430\u0434\u043a\u0430)","An AJAX HTTP error occurred.":"\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 AJAX HTTP \u043e\u0448\u0438\u0431\u043a\u0430.","HTTP Result Code: !status":"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0439 \u043a\u043e\u0434 HTTP: !status","An AJAX HTTP request terminated abnormally.":"HTTP \u0437\u0430\u043f\u0440\u043e\u0441 AJAX \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e.","Debugging information follows.":"\u0421\u043b\u0435\u0434\u0443\u0435\u0442 \u043e\u0442\u043b\u0430\u0434\u043e\u0447\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f.","Path: !uri":"\u041f\u0443\u0442\u044c: !uri","StatusText: !statusText":"\u0421\u0442\u0430\u0442\u0443\u0441\u0422\u0435\u043a\u0441\u0442\u043e\u043c","ResponseText: !responseText":"\u041e\u0442\u0432\u0435\u0442\u0422\u0435\u043a\u0441\u0442\u043e\u043c: !responseText","ReadyState: !readyState":"ReadyState: !readyState","Not customizable":"\u041d\u0435 \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043c\u044b\u0439","Restricted to certain pages":"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043e \u0434\u043b\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u044b\u0445 \u0441\u0442\u0440\u0430\u043d\u0438\u0446","The block cannot be placed in this region.":"\u0411\u043b\u043e\u043a \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0440\u0430\u0437\u043c\u0435\u0449\u0451\u043d \u0432 \u044d\u0442\u043e\u043c \u0440\u0435\u0433\u0438\u043e\u043d\u0435.","Customize dashboard":"\u041d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u043f\u0430\u043d\u0435\u043b\u044c \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f","Hide summary":"\u0421\u043a\u0440\u044b\u0442\u044c \u0430\u043d\u043e\u043d\u0441","Edit summary":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0430\u043d\u043e\u043d\u0441","Don\u0027t display post information":"\u041d\u0435 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0430","@title dialog":"\u0414\u0438\u0430\u043b\u043e\u0433 @title","The selected file %filename cannot be uploaded. Only files with the following extensions are allowed: %extensions.":"\u0412\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b %filename \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d. \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0444\u0430\u0439\u043b\u043e\u0432 \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u043e \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c\u0438 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f\u043c\u0438: %extensions.","Re-order rows by numerical weight instead of dragging.":"\u0423\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0438\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u0438 \u043f\u043e \u0432\u0435\u0441\u0443 \u0432\u043c\u0435\u0441\u0442\u043e \u043f\u0435\u0440\u0435\u0442\u0430\u0441\u043a\u0438\u0432\u0430\u043d\u0438\u044f.","Show row weights":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0435\u0441 \u0441\u0442\u0440\u043e\u043a","Hide row weights":"\u0421\u043a\u0440\u044b\u0442\u044c \u0432\u0435\u0441 \u0441\u0442\u0440\u043e\u043a","Autocomplete popup":"\u0412\u0441\u043f\u043b\u044b\u0432\u0430\u044e\u0449\u0435\u0435 \u0430\u0432\u0442\u043e\u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435","Searching for matches...":"\u041f\u043e\u0438\u0441\u043a \u0441\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u0439...","Hide shortcuts":"\u0421\u043a\u0440\u044b\u0442\u044c \u044f\u0440\u043b\u044b\u043a\u0438","Submit":"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c","Loading...":"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...","Select":"\u0412\u044b\u0431\u0440\u0430\u0442\u044c","Remove group":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0443\u0441\u043b\u043e\u0432\u0438\u0435","Apply (all displays)":"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c (\u0432\u0441\u0435 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f)","Apply (this display)":"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c (\u044d\u0442\u043e \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435)","Revert to default":"\u0412\u0435\u0440\u043d\u0443\u0442\u044c \u043a \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u043c \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e","Slideshow":"\u0421\u043b\u0430\u0439\u0434-\u0448\u043e\u0443","Previous":"\u041d\u0430\u0437\u0430\u0434","Close":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c","Colorbox":"Colorbox","Available tokens":"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0435 \u043c\u0430\u0440\u043a\u0435\u0440\u044b","Insert this token into your form":"\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u044d\u0442\u043e\u0442 \u0442\u043e\u043a\u0435\u043d \u0432 \u0432\u0430\u0448\u0443 \u0444\u043e\u0440\u043c\u0443","First click a text field to insert your tokens into.":"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u043a\u043b\u0438\u043a\u043d\u0438\u0442\u0435 \u0432 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u0435 \u043f\u043e\u043b\u0435, \u0447\u0442\u043e\u0431\u044b \u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044c\u0442\u043e\u043a\u0435\u043d\u044b.","Loading token browser...":"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430 \u043c\u0435\u0442\u043e\u043a...","Automatic alias":"\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0441\u0438\u043d\u043e\u043d\u0438\u043c","Inclusion: @value":"\u0412\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435: @value","Priority: @value":"\u041f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442: @value","all":"\u0432\u0441\u0435","Using defaults":"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e","Add file":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0444\u0430\u0439\u043b","Cannot continue, nothing selected":"\u041d\u0435 \u043c\u043e\u0433\u0443 \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c, \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e","Error getting media.":"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u043c\u0435\u0434\u0438\u0430.","There is nothing in your media library. Select the Upload tab above to add a file.":"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435\u0442 \u0432 \u0432\u0430\u0448\u0435\u0439 \u043c\u0435\u0434\u0438\u0430\u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0435. \u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u044b\u0448\u0435 \u0432\u043a\u043b\u0430\u0434\u043a\u0443 \u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0434\u043b\u044f \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0444\u0430\u0439\u043b\u0430.","Item !current of !total":"\u042d\u043b\u0435\u043c\u0435\u043d\u0442 !current \u0438\u0437 !total","Back to Top":"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u0432 \u043d\u0430\u0447\u0430\u043b\u043e"}} };;
/*!
	Colorbox 1.6.4
	license: MIT
	http://www.jacklmoore.com/colorbox
*/
(function(t,e,i){function n(i,n,o){var r=e.createElement(i);return n&&(r.id=Z+n),o&&(r.style.cssText=o),t(r)}function o(){return i.innerHeight?i.innerHeight:t(i).height()}function r(e,i){i!==Object(i)&&(i={}),this.cache={},this.el=e,this.value=function(e){var n;return void 0===this.cache[e]&&(n=t(this.el).attr("data-cbox-"+e),void 0!==n?this.cache[e]=n:void 0!==i[e]?this.cache[e]=i[e]:void 0!==X[e]&&(this.cache[e]=X[e])),this.cache[e]},this.get=function(e){var i=this.value(e);return t.isFunction(i)?i.call(this.el,this):i}}function h(t){var e=W.length,i=(A+t)%e;return 0>i?e+i:i}function a(t,e){return Math.round((/%/.test(t)?("x"===e?E.width():o())/100:1)*parseInt(t,10))}function s(t,e){return t.get("photo")||t.get("photoRegex").test(e)}function l(t,e){return t.get("retinaUrl")&&i.devicePixelRatio>1?e.replace(t.get("photoRegex"),t.get("retinaSuffix")):e}function d(t){"contains"in x[0]&&!x[0].contains(t.target)&&t.target!==v[0]&&(t.stopPropagation(),x.focus())}function c(t){c.str!==t&&(x.add(v).removeClass(c.str).addClass(t),c.str=t)}function g(e){A=0,e&&e!==!1&&"nofollow"!==e?(W=t("."+te).filter(function(){var i=t.data(this,Y),n=new r(this,i);return n.get("rel")===e}),A=W.index(_.el),-1===A&&(W=W.add(_.el),A=W.length-1)):W=t(_.el)}function u(i){t(e).trigger(i),ae.triggerHandler(i)}function f(i){var o;if(!G){if(o=t(i).data(Y),_=new r(i,o),g(_.get("rel")),!U){U=$=!0,c(_.get("className")),x.css({visibility:"hidden",display:"block",opacity:""}),I=n(se,"LoadedContent","width:0; height:0; overflow:hidden; visibility:hidden"),b.css({width:"",height:""}).append(I),j=T.height()+k.height()+b.outerHeight(!0)-b.height(),D=C.width()+H.width()+b.outerWidth(!0)-b.width(),N=I.outerHeight(!0),z=I.outerWidth(!0);var h=a(_.get("initialWidth"),"x"),s=a(_.get("initialHeight"),"y"),l=_.get("maxWidth"),f=_.get("maxHeight");_.w=Math.max((l!==!1?Math.min(h,a(l,"x")):h)-z-D,0),_.h=Math.max((f!==!1?Math.min(s,a(f,"y")):s)-N-j,0),I.css({width:"",height:_.h}),J.position(),u(ee),_.get("onOpen"),O.add(F).hide(),x.focus(),_.get("trapFocus")&&e.addEventListener&&(e.addEventListener("focus",d,!0),ae.one(re,function(){e.removeEventListener("focus",d,!0)})),_.get("returnFocus")&&ae.one(re,function(){t(_.el).focus()})}var p=parseFloat(_.get("opacity"));v.css({opacity:p===p?p:"",cursor:_.get("overlayClose")?"pointer":"",visibility:"visible"}).show(),_.get("closeButton")?B.html(_.get("close")).appendTo(b):B.appendTo("<div/>"),w()}}function p(){x||(V=!1,E=t(i),x=n(se).attr({id:Y,"class":t.support.opacity===!1?Z+"IE":"",role:"dialog",tabindex:"-1"}).hide(),v=n(se,"Overlay").hide(),L=t([n(se,"LoadingOverlay")[0],n(se,"LoadingGraphic")[0]]),y=n(se,"Wrapper"),b=n(se,"Content").append(F=n(se,"Title"),R=n(se,"Current"),P=t('<button type="button"/>').attr({id:Z+"Previous"}),K=t('<button type="button"/>').attr({id:Z+"Next"}),S=t('<button type="button"/>').attr({id:Z+"Slideshow"}),L),B=t('<button type="button"/>').attr({id:Z+"Close"}),y.append(n(se).append(n(se,"TopLeft"),T=n(se,"TopCenter"),n(se,"TopRight")),n(se,!1,"clear:left").append(C=n(se,"MiddleLeft"),b,H=n(se,"MiddleRight")),n(se,!1,"clear:left").append(n(se,"BottomLeft"),k=n(se,"BottomCenter"),n(se,"BottomRight"))).find("div div").css({"float":"left"}),M=n(se,!1,"position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"),O=K.add(P).add(R).add(S)),e.body&&!x.parent().length&&t(e.body).append(v,x.append(y,M))}function m(){function i(t){t.which>1||t.shiftKey||t.altKey||t.metaKey||t.ctrlKey||(t.preventDefault(),f(this))}return x?(V||(V=!0,K.click(function(){J.next()}),P.click(function(){J.prev()}),B.click(function(){J.close()}),v.click(function(){_.get("overlayClose")&&J.close()}),t(e).bind("keydown."+Z,function(t){var e=t.keyCode;U&&_.get("escKey")&&27===e&&(t.preventDefault(),J.close()),U&&_.get("arrowKey")&&W[1]&&!t.altKey&&(37===e?(t.preventDefault(),P.click()):39===e&&(t.preventDefault(),K.click()))}),t.isFunction(t.fn.on)?t(e).on("click."+Z,"."+te,i):t("."+te).live("click."+Z,i)),!0):!1}function w(){var e,o,r,h=J.prep,d=++le;if($=!0,q=!1,u(he),u(ie),_.get("onLoad"),_.h=_.get("height")?a(_.get("height"),"y")-N-j:_.get("innerHeight")&&a(_.get("innerHeight"),"y"),_.w=_.get("width")?a(_.get("width"),"x")-z-D:_.get("innerWidth")&&a(_.get("innerWidth"),"x"),_.mw=_.w,_.mh=_.h,_.get("maxWidth")&&(_.mw=a(_.get("maxWidth"),"x")-z-D,_.mw=_.w&&_.w<_.mw?_.w:_.mw),_.get("maxHeight")&&(_.mh=a(_.get("maxHeight"),"y")-N-j,_.mh=_.h&&_.h<_.mh?_.h:_.mh),e=_.get("href"),Q=setTimeout(function(){L.show()},100),_.get("inline")){var c=t(e).eq(0);r=t("<div>").hide().insertBefore(c),ae.one(he,function(){r.replaceWith(c)}),h(c)}else _.get("iframe")?h(" "):_.get("html")?h(_.get("html")):s(_,e)?(e=l(_,e),q=_.get("createImg"),t(q).addClass(Z+"Photo").bind("error."+Z,function(){h(n(se,"Error").html(_.get("imgError")))}).one("load",function(){d===le&&setTimeout(function(){var e;_.get("retinaImage")&&i.devicePixelRatio>1&&(q.height=q.height/i.devicePixelRatio,q.width=q.width/i.devicePixelRatio),_.get("scalePhotos")&&(o=function(){q.height-=q.height*e,q.width-=q.width*e},_.mw&&q.width>_.mw&&(e=(q.width-_.mw)/q.width,o()),_.mh&&q.height>_.mh&&(e=(q.height-_.mh)/q.height,o())),_.h&&(q.style.marginTop=Math.max(_.mh-q.height,0)/2+"px"),W[1]&&(_.get("loop")||W[A+1])&&(q.style.cursor="pointer",t(q).bind("click."+Z,function(){J.next()})),q.style.width=q.width+"px",q.style.height=q.height+"px",h(q)},1)}),q.src=e):e&&M.load(e,_.get("data"),function(e,i){d===le&&h("error"===i?n(se,"Error").html(_.get("xhrError")):t(this).contents())})}var v,x,y,b,T,C,H,k,W,E,I,M,L,F,R,S,K,P,B,O,_,j,D,N,z,A,q,U,$,G,Q,J,V,X={html:!1,photo:!1,iframe:!1,inline:!1,transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,opacity:.9,preloading:!0,className:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0,closeButton:!0,fastIframe:!0,open:!1,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",returnFocus:!0,trapFocus:!0,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,rel:function(){return this.rel},href:function(){return t(this).attr("href")},title:function(){return this.title},createImg:function(){var e=new Image,i=t(this).data("cbox-img-attrs");return"object"==typeof i&&t.each(i,function(t,i){e[t]=i}),e},createIframe:function(){var i=e.createElement("iframe"),n=t(this).data("cbox-iframe-attrs");return"object"==typeof n&&t.each(n,function(t,e){i[t]=e}),"frameBorder"in i&&(i.frameBorder=0),"allowTransparency"in i&&(i.allowTransparency="true"),i.name=(new Date).getTime(),i.allowFullscreen=!0,i}},Y="colorbox",Z="cbox",te=Z+"Element",ee=Z+"_open",ie=Z+"_load",ne=Z+"_complete",oe=Z+"_cleanup",re=Z+"_closed",he=Z+"_purge",ae=t("<a/>"),se="div",le=0,de={},ce=function(){function t(){clearTimeout(h)}function e(){(_.get("loop")||W[A+1])&&(t(),h=setTimeout(J.next,_.get("slideshowSpeed")))}function i(){S.html(_.get("slideshowStop")).unbind(s).one(s,n),ae.bind(ne,e).bind(ie,t),x.removeClass(a+"off").addClass(a+"on")}function n(){t(),ae.unbind(ne,e).unbind(ie,t),S.html(_.get("slideshowStart")).unbind(s).one(s,function(){J.next(),i()}),x.removeClass(a+"on").addClass(a+"off")}function o(){r=!1,S.hide(),t(),ae.unbind(ne,e).unbind(ie,t),x.removeClass(a+"off "+a+"on")}var r,h,a=Z+"Slideshow_",s="click."+Z;return function(){r?_.get("slideshow")||(ae.unbind(oe,o),o()):_.get("slideshow")&&W[1]&&(r=!0,ae.one(oe,o),_.get("slideshowAuto")?i():n(),S.show())}}();t[Y]||(t(p),J=t.fn[Y]=t[Y]=function(e,i){var n,o=this;return e=e||{},t.isFunction(o)&&(o=t("<a/>"),e.open=!0),o[0]?(p(),m()&&(i&&(e.onComplete=i),o.each(function(){var i=t.data(this,Y)||{};t.data(this,Y,t.extend(i,e))}).addClass(te),n=new r(o[0],e),n.get("open")&&f(o[0])),o):o},J.position=function(e,i){function n(){T[0].style.width=k[0].style.width=b[0].style.width=parseInt(x[0].style.width,10)-D+"px",b[0].style.height=C[0].style.height=H[0].style.height=parseInt(x[0].style.height,10)-j+"px"}var r,h,s,l=0,d=0,c=x.offset();if(E.unbind("resize."+Z),x.css({top:-9e4,left:-9e4}),h=E.scrollTop(),s=E.scrollLeft(),_.get("fixed")?(c.top-=h,c.left-=s,x.css({position:"fixed"})):(l=h,d=s,x.css({position:"absolute"})),d+=_.get("right")!==!1?Math.max(E.width()-_.w-z-D-a(_.get("right"),"x"),0):_.get("left")!==!1?a(_.get("left"),"x"):Math.round(Math.max(E.width()-_.w-z-D,0)/2),l+=_.get("bottom")!==!1?Math.max(o()-_.h-N-j-a(_.get("bottom"),"y"),0):_.get("top")!==!1?a(_.get("top"),"y"):Math.round(Math.max(o()-_.h-N-j,0)/2),x.css({top:c.top,left:c.left,visibility:"visible"}),y[0].style.width=y[0].style.height="9999px",r={width:_.w+z+D,height:_.h+N+j,top:l,left:d},e){var g=0;t.each(r,function(t){return r[t]!==de[t]?(g=e,void 0):void 0}),e=g}de=r,e||x.css(r),x.dequeue().animate(r,{duration:e||0,complete:function(){n(),$=!1,y[0].style.width=_.w+z+D+"px",y[0].style.height=_.h+N+j+"px",_.get("reposition")&&setTimeout(function(){E.bind("resize."+Z,J.position)},1),t.isFunction(i)&&i()},step:n})},J.resize=function(t){var e;U&&(t=t||{},t.width&&(_.w=a(t.width,"x")-z-D),t.innerWidth&&(_.w=a(t.innerWidth,"x")),I.css({width:_.w}),t.height&&(_.h=a(t.height,"y")-N-j),t.innerHeight&&(_.h=a(t.innerHeight,"y")),t.innerHeight||t.height||(e=I.scrollTop(),I.css({height:"auto"}),_.h=I.height()),I.css({height:_.h}),e&&I.scrollTop(e),J.position("none"===_.get("transition")?0:_.get("speed")))},J.prep=function(i){function o(){return _.w=_.w||I.width(),_.w=_.mw&&_.mw<_.w?_.mw:_.w,_.w}function a(){return _.h=_.h||I.height(),_.h=_.mh&&_.mh<_.h?_.mh:_.h,_.h}if(U){var d,g="none"===_.get("transition")?0:_.get("speed");I.remove(),I=n(se,"LoadedContent").append(i),I.hide().appendTo(M.show()).css({width:o(),overflow:_.get("scrolling")?"auto":"hidden"}).css({height:a()}).prependTo(b),M.hide(),t(q).css({"float":"none"}),c(_.get("className")),d=function(){function i(){t.support.opacity===!1&&x[0].style.removeAttribute("filter")}var n,o,a=W.length;U&&(o=function(){clearTimeout(Q),L.hide(),u(ne),_.get("onComplete")},F.html(_.get("title")).show(),I.show(),a>1?("string"==typeof _.get("current")&&R.html(_.get("current").replace("{current}",A+1).replace("{total}",a)).show(),K[_.get("loop")||a-1>A?"show":"hide"]().html(_.get("next")),P[_.get("loop")||A?"show":"hide"]().html(_.get("previous")),ce(),_.get("preloading")&&t.each([h(-1),h(1)],function(){var i,n=W[this],o=new r(n,t.data(n,Y)),h=o.get("href");h&&s(o,h)&&(h=l(o,h),i=e.createElement("img"),i.src=h)})):O.hide(),_.get("iframe")?(n=_.get("createIframe"),_.get("scrolling")||(n.scrolling="no"),t(n).attr({src:_.get("href"),"class":Z+"Iframe"}).one("load",o).appendTo(I),ae.one(he,function(){n.src="//about:blank"}),_.get("fastIframe")&&t(n).trigger("load")):o(),"fade"===_.get("transition")?x.fadeTo(g,1,i):i())},"fade"===_.get("transition")?x.fadeTo(g,0,function(){J.position(0,d)}):J.position(g,d)}},J.next=function(){!$&&W[1]&&(_.get("loop")||W[A+1])&&(A=h(1),f(W[A]))},J.prev=function(){!$&&W[1]&&(_.get("loop")||A)&&(A=h(-1),f(W[A]))},J.close=function(){U&&!G&&(G=!0,U=!1,u(oe),_.get("onCleanup"),E.unbind("."+Z),v.fadeTo(_.get("fadeOut")||0,0),x.stop().fadeTo(_.get("fadeOut")||0,0,function(){x.hide(),v.hide(),u(he),I.remove(),setTimeout(function(){G=!1,u(re),_.get("onClosed")},1)}))},J.remove=function(){x&&(x.stop(),t[Y].close(),x.stop(!1,!0).remove(),v.remove(),G=!1,x=null,t("."+te).removeData(Y).removeClass(te),t(e).unbind("click."+Z).unbind("keydown."+Z))},J.element=function(){return t(_.el)},J.settings=X)})(jQuery,document,window);;
(function ($) {

Drupal.behaviors.initColorbox = {
  attach: function (context, settings) {
    if (!$.isFunction($.colorbox) || typeof settings.colorbox === 'undefined') {
      return;
    }

    if (settings.colorbox.mobiledetect && window.matchMedia) {
      // Disable Colorbox for small screens.
      var mq = window.matchMedia("(max-device-width: " + settings.colorbox.mobiledevicewidth + ")");
      if (mq.matches) {
        return;
      }
    }

    // Use "data-colorbox-gallery" if set otherwise use "rel".
    settings.colorbox.rel = function () {
      if ($(this).data('colorbox-gallery')) {
        return $(this).data('colorbox-gallery');
      }
      else {
        return $(this).attr('rel');
      }
    };

    $('.colorbox', context)
      .once('init-colorbox')
      .colorbox(settings.colorbox);

    $(context).bind('cbox_complete', function () {
      Drupal.attachBehaviors('#cboxLoadedContent');
    });
  }
};

})(jQuery);
;
(function ($) {

Drupal.behaviors.initColorboxLoad = {
  attach: function (context, settings) {
    if (!$.isFunction($.colorbox) || typeof settings.colorbox === 'undefined') {
      return;
    }

    if (settings.colorbox.mobiledetect && window.matchMedia) {
      // Disable Colorbox for small screens.
      var mq = window.matchMedia("(max-device-width: " + settings.colorbox.mobiledevicewidth + ")");
      if (mq.matches) {
        return;
      }
    }

    $.urlParams = function (url) {
      var p = {},
          e,
          a = /\+/g,  // Regex for replacing addition symbol with a space
          r = /([^&=]+)=?([^&]*)/g,
          d = function (s) { return decodeURIComponent(s.replace(a, ' ')); },
          q = url.split('?');
      while (e = r.exec(q[1])) {
        e[1] = d(e[1]);
        e[2] = d(e[2]);
        switch (e[2].toLowerCase()) {
          case 'true':
          case 'yes':
            e[2] = true;
            break;
          case 'false':
          case 'no':
            e[2] = false;
            break;
        }
        if (e[1] == 'width') { e[1] = 'innerWidth'; }
        if (e[1] == 'height') { e[1] = 'innerHeight'; }
        p[e[1]] = e[2];
      }
      return p;
    };
    $('.colorbox-load', context)
      .once('init-colorbox-load', function () {
        var params = $.urlParams($(this).attr('href'));
        $(this).colorbox($.extend({}, settings.colorbox, params));
      });
  }
};

})(jQuery);
;
(function ($) {

Drupal.behaviors.initColorboxInline = {
  attach: function (context, settings) {
    if (!$.isFunction($.colorbox) || typeof settings.colorbox === 'undefined') {
      return;
    }

    if (settings.colorbox.mobiledetect && window.matchMedia) {
      // Disable Colorbox for small screens.
      var mq = window.matchMedia("(max-device-width: " + settings.colorbox.mobiledevicewidth + ")");
      if (mq.matches) {
        return;
      }
    }

    $.urlParam = function(name, url){
      if (name == 'fragment') {
        var results = new RegExp('(#[^&#]*)').exec(url);
      }
      else {
        var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(url);
      }
      if (!results) { return ''; }
      return results[1] || '';
    };
    $('.colorbox-inline', context).once('init-colorbox-inline').colorbox({
      transition:settings.colorbox.transition,
      speed:settings.colorbox.speed,
      opacity:settings.colorbox.opacity,
      slideshow:settings.colorbox.slideshow,
      slideshowAuto:settings.colorbox.slideshowAuto,
      slideshowSpeed:settings.colorbox.slideshowSpeed,
      slideshowStart:settings.colorbox.slideshowStart,
      slideshowStop:settings.colorbox.slideshowStop,
      current:settings.colorbox.current,
      previous:settings.colorbox.previous,
      next:settings.colorbox.next,
      close:settings.colorbox.close,
      overlayClose:settings.colorbox.overlayClose,
      maxWidth:settings.colorbox.maxWidth,
      maxHeight:settings.colorbox.maxHeight,
      innerWidth:function(){
        return $.urlParam('width', $(this).attr('href'));
      },
      innerHeight:function(){
        return $.urlParam('height', $(this).attr('href'));
      },
      title:function(){
        return decodeURIComponent($.urlParam('title', $(this).attr('href')));
      },
      iframe:function(){
        return $.urlParam('iframe', $(this).attr('href'));
      },
      inline:function(){
        return $.urlParam('inline', $(this).attr('href'));
      },
      href:function(){
        return $.urlParam('fragment', $(this).attr('href'));
      }
    });
  }
};

})(jQuery);
;
// $Id: dhtml_menu.js,v 1.49 2009/11/12 21:47:59 arancaytar Exp $



/**
 * @file dhtml_menu.js
 * The Javascript code for DHTML Menu
 */


(function($) {
Drupal.dhtmlMenu = {};
Drupal.dhtmlMenu.animation = {show:{}, hide:{}, count:0};

/**
 * Initialize the module's JS functions
 */
Drupal.behaviors.dhtmlMenu = {
  attach: function() {
    var settings = Drupal.settings.dhtmlMenu;

    // Initialize the animation effects from the settings.
    for (i in settings.animation.effects) {
      if (settings.animation.effects[i]) {
        Drupal.dhtmlMenu.animation.show[i] = 'show';
        Drupal.dhtmlMenu.animation.hide[i] = 'hide';
        Drupal.dhtmlMenu.animation.count++;
      }
    }

    // Sanitize by removing "expanded" on menus already marked "collapsed".
    $('li.dhtml-menu.collapsed.expanded').removeClass('expanded');

    /* Relevant only on "open-only" menus:
     * The links of expanded items should be marked for emphasis.
     */
    if (settings.nav == 'open') {
      $('li.dhtml-menu.expanded').addClass('dhtml-menu-open');
    }

    /* Relevant only when hovering:
     *
     * If a context menu is opened (as most users do when opening links in a
     * new tab), the mouseleave event will be triggered. Although the context
     * menu still works, having the menu close underneath it is confusing.
     *
     * This code will "freeze" the menu's collapse if the body is left
     * (which happens when a context menu opens), and only release it when the cursor
     * reenters the menu.
     *
     * Note that due to the order in which events are called,
     * the hovering collapse must work asynchronously so
     * this event is triggered before the collapse.
     */
    else if (settings.nav == 'hover') {
      var freeze = false;
      $('ul.menu').mouseenter(function() {freeze = false});
      $('body').mouseleave(function() {freeze = true});
    }

    /* Relevant only on bullet-icon expansion:
     * Create the markup for the bullet overlay, and the amount to shift it to the right in RTL mode.
     */
    else if (settings.nav == 'bullet') {
      var bullet = $('<a href="#" class="dhtml-menu-icon"></a>');
      var rtl = $('html').attr('dir') == 'rtl' ? Math.ceil($('.menu li').css('margin-right').replace('px', '')) + 1 : 0;
    }

    /* Relevant only when adding cloned links:
     * Create the markup for the cloned list item container.
     */
    else if (settings.nav == 'clone') {
      // Note: a single long class is used here to avoid matching the .dhtml-menu.leaf selector later on.
      var cloned = $('<li class="leaf dhtml-menu-cloned-leaf"></li>');
    }

    /* Add jQuery effects and listeners to all menu items. */
    $('ul.menu li.dhtml-menu:not(.leaf)').each(function() {
      var li = $(this);
      var link = $(this).find('a:first');
      var ul = $(this).find('ul:first');

      // Only work on menus with an actual sub-menu.
      if (link.length && ul.length) {
        /* When using cloned items:
         * - Clone the menu link and mark it as a clone.
         */
        if (settings.nav == 'clone') {
          link.clone().prependTo(ul).wrap(cloned);
        }

        /* When using double-click:
         * - Add a dblclick event handler that allows the normal link action to complete.
         */
        else if (settings.nav == 'doubleclick') {
          link.dblclick(function(e) {
            return true;
          });
        }

        /* When using bullet expansion:
         * - Change the icon to a folder image
         * - Add the clickable overlay and its handler
         * - In RTL mode, shift the overlay to the right of the text.
         * - @TODO: Explore whether "float:right" in dhtml_menu-rtl.css could solve this.
         */
        else if (settings.nav == 'bullet') {
          li.addClass('dhtml-folder');
          var b = bullet.clone().prependTo(link).click(function(e) {
            Drupal.dhtmlMenu.toggleMenu(li, link, ul);
            if (settings.effects.remember) {
              Drupal.dhtmlMenu.cookieSet();
            }
            return false;
          });

          // When using RTL, each overlay must be shifted to the other side of the link text, individually.
          if (rtl) {
            // Shift the overlay right by the width of the text and the distance between text and icon.
            b.css('right', '-' + (Math.ceil(link.css('width').replace('px', '')) + rtl) + 'px');
          }
        }

        /* When using hover expansion:
         * - Add mouse-hovering events.
         */
        else if (settings.nav == 'hover') {
          link.mouseenter(function(e) {
              Drupal.dhtmlMenu.switchMenu(li, link, ul, true);
          });
          li.mouseleave(function(e) {
            // Only collapse the menu if it was initially collapsed.
            if (li.hasClass('start-collapsed')) {
              /* As explained earlier, this event fires before the body event.
               * We need to wait to make sure that the user isn't browsing a
               * context menu right now, in which case the menu isn't collapsed.
               */
              setTimeout(function() {
                if (!freeze) {
                  Drupal.dhtmlMenu.switchMenu(li, link, ul, false);
                }
              }, 10);
            }
          });
        }

        /* When using menus that cannot collapse:
         * Toggle the menu normally, but only if the menu is closed.
         */
        else if (settings.nav == 'open') {
          link.click(function(e) {
            // Don't collapse expanded menus.
            if (li.hasClass('expanded')) {
              return true;
            }
            Drupal.dhtmlMenu.toggleMenu(li, link, ul);
            $('.dhtml-menu-open').removeClass('dhtml-menu-open');
            $('li.dhtml-menu.expanded').addClass('dhtml-menu-open');
            return false;
          });
        }

        // These three options make links simply toggle when clicked.
        if (settings.nav == 'clone' || settings.nav == 'doubleclick' || settings.nav == 'none') {
          link.click(function(e) {
            Drupal.dhtmlMenu.toggleMenu(li, link, ul);
            if (settings.effects.remember) {
              Drupal.dhtmlMenu.cookieSet();
            }
            return false;
          });
        }
      }
    });

    // When using LTR, all icons can be shifted as one, as the text width is not relevant.
    if (settings.nav == 'bullet' && !rtl) {
      // Shift overlay to the left by the width of the icon and the distance between icon and text.
      var shift = '-' + (Math.ceil(($('.menu li').css('margin-left').replace('px', ''))) + 16) + 'px';
      // Shift the overlay using a negative left-hand offset, and the text using a negative right-hand margin.
      $('.dhtml-menu-icon').css('left', shift).css('margin-right', shift);
    }
  }
}

/**
 * Toggles the menu's state between open and closed.
 *
 * @param li
 *   Object. The <li> element that will be expanded or collapsed.
 * @param link
 *   Object. The <a> element representing the menu link anchor.
 * @param ul
 *   Object. The <ul> element containing the sub-items.
 */
Drupal.dhtmlMenu.toggleMenu = function(li, link, ul) {
  // Make it open if closed, close if open.
  Drupal.dhtmlMenu.switchMenu(li, link, ul, !li.hasClass('expanded'));
}

/**
 * Switches the menu's state to a defined value.
 * This function does nothing if the menu is in the target state already.
 *
 * @param li
 *   Object. The <li> element that will be expanded or collapsed.
 * @param link
 *   Object. The <a> element representing the menu link anchor.
 * @param ul
 *   Object. The <ul> element containing the sub-items.
 */
Drupal.dhtmlMenu.switchMenu = function(li, link, ul, open) {
  // No need for switching. Menu is already in desired state.
  if (open == li.hasClass('expanded')) {
    return;
  }

  var effects = Drupal.settings.dhtmlMenu.effects;

  if (open) {
    Drupal.dhtmlMenu.animate(ul, 'show');
    li.removeClass('collapsed').addClass('expanded');

    // If the siblings effect is on, close all sibling menus.
    if (effects.siblings != 'none') {
      var id = li.attr('id');
      /* Siblings are all open menus that are neither parents nor children of this menu.
       * First, mark this item's children for exclusion.
       */
      li.find('li').addClass('own-children-temp');

      // If the relativity option is on, select only the siblings that have the same root
      if (effects.siblings == 'close-same-tree') {
        var root = li.parent();
      }
      else {
        var root = $('ul.menu');
      }
      var siblings = root.find('li.expanded').not('.own-children-temp').not('#' + id);

      // If children should not get closed automatically...
      if (effects.children == 'none') {
        // Remove items that are currently hidden from view (do not close these).
        $('li.collapsed li.expanded').addClass('sibling-children-temp');
        // Only close the top-most open sibling, not its children.
        siblings.find('li.expanded').addClass('sibling-children-temp');
        siblings = $(siblings).not('.sibling-children-temp');
      }

      // The temp classes can now be removed.
      $('.own-children-temp, .sibling-children-temp')
        .removeClass('own-children-temp')
        .removeClass('sibling-children-temp');

      Drupal.dhtmlMenu.animate(siblings.find('ul:first'), 'hide');
      siblings.removeClass('expanded').addClass('collapsed');
    }
  }
  else {
    Drupal.dhtmlMenu.animate(ul, 'hide');
    li.removeClass('expanded').addClass('collapsed');

    // If children are closed automatically, find and close them now.
    if (effects.children == 'close-children') {
      // If a sub-menu closes in the forest and nobody sees it, is animation a waste of performance? Yes.
      li.find('li.expanded')
        .removeClass('expanded').addClass('collapsed')
        .find('ul:first').css('display', 'none');
    }
  }
}

/**
 * Animate a specific block element using the configured DHTML effects.
 *
 * @param element
 *   The element to be animated. DHTML Menu only animates <ul> elements,
 *   but this could in theory be any block (not inline) element.
 *
 * @param action
 *   One of either 'show' or 'hide'.
 */
Drupal.dhtmlMenu.animate = function(element, action) {
  var effects = Drupal.dhtmlMenu.animation;
  var speed = Drupal.settings.dhtmlMenu.animation.speed;

  if (effects.count) {
    element.animate(effects[action], speed * 1);
  }
  else {
    element.css('display', action == 'show' ? 'block' : 'none');
  }
}

/**
 * Saves the dhtml_menu cookie.
 */
Drupal.dhtmlMenu.cookieSet = function() {
  var expanded = new Array();
  $('li.expanded').each(function() {
    expanded.push(this.id);
  });
  document.cookie = 'dhtml_menu=' + expanded.join(',') + ';path=/';
}

})(jQuery);

;
