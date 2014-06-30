var times = function() {
    var timing = performance.timing;
    var loadTime = timing.loadEventEnd - timing.navigationStart;//过早获取时,loadEventEnd有时会是0
    if(loadTime <= 0) {
        setTimeout(function(){
            times();
        }, 200);
        return;
    }
    var readyStart = timing.fetchStart - timing.navigationStart;
    var redirectTime = timing.redirectEnd  - timing.redirectStart;
    var appcacheTime = timing.domainLookupStart  - timing.fetchStart;
    var unloadEventTime = timing.unloadEventEnd - timing.unloadEventStart;
    var lookupDomainTime = timing.domainLookupEnd - timing.domainLookupStart;
    var connectTime = timing.connectEnd - timing.connectStart;
    var requestTime = timing.responseEnd - timing.requestStart;
    var initDomTreeTime = timing.domInteractive - timing.responseEnd;
    var domReadyTime = timing.domComplete - timing.domInteractive; //过早获取时,domComplete有时会是0
    var loadEventTime = timing.loadEventEnd - timing.loadEventStart;

    var allTimes = [
        { "描述": "准备新页面时间耗时", "时间(ms)": readyStart },
        { "描述": "redirect 重定向耗时", "时间(ms)": redirectTime },
        { "描述": "Appcache 耗时", "时间(ms)": appcacheTime },
        { "描述": "unload 前文档耗时", "时间(ms)": unloadEventTime },
        { "描述": "DNS 查询耗时", "时间(ms)": lookupDomainTime },
        { "描述": "TCP连接耗时", "时间(ms)": connectTime },
        { "描述": "request请求耗时", "时间(ms)": requestTime },
        { "描述": "请求完毕至DOM加载", "时间(ms)": initDomTreeTime },
        { "描述": "解释dom树耗时", "时间(ms)": domReadyTime },
        { "描述": "load事件耗时", "时间(ms)": loadEventTime },
        { "描述": "从开始至load总耗时", "时间(ms)": loadTime }
    ];
    console.table(allTimes);
}
window.onload = times;
