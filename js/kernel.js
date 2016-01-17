/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var kernel = {
    config: {
        yandex_auth: "OAuth 07d6f6ab0d9a487d9b4e0cfd4e91cb6e",
        domen:"http://sh.dev"
    },
    
    css_r: {},
    css_load: function (url) {
        if (this.css_r[url] == undefined) {
            var data = localStorage.getItem(url);
            if (data) {
                $("head").append("<style>" + data + "</style>");
            } else {
                var ret = $.ajax({
                    url: url,
                    async: false
                }).responseText;

                try {
                    localStorage.setItem(url, ret);
                } catch (e) {
                    if (e == QUOTA_EXCEEDED_ERR) {
                        localStorage.clear();
                        localStorage.setItem(url, ret);
                    } else {
                        _.log.set("error", e);
                    }
                }
                $("head").append("<style>" + ret + "</style>");
            }
            this.css_r[url] = 0;
        }
    },
    js_r: {},
    js_load: function (url) {
        if (this.js_r[url] == undefined) {
            eval($.ajax({
                url: url,
                async: false
            }).responseText);
            this.js_r[url] = 0;
        }
    },
    json_load: function (patch) {
        return $.parseJSON($.ajax({
            url: patch,
            async: false
        }).responseText);
    },
    page_load: function(patch){
        var page = $.ajax({
            url: patch,
            async: false
        }).responseText;
        $("#jgjfgd").empty();
        $("#jgjfgd").append(page);
    }
};
