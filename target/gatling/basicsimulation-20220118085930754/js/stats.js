var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2",
        "ok": "2",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "302",
        "ok": "302",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "604",
        "ok": "604",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "453",
        "ok": "453",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "151",
        "ok": "151",
        "ko": "-"
    },
    "percentiles1": {
        "total": "453",
        "ok": "453",
        "ko": "-"
    },
    "percentiles2": {
        "total": "529",
        "ok": "529",
        "ko": "-"
    },
    "percentiles3": {
        "total": "589",
        "ok": "589",
        "ko": "-"
    },
    "percentiles4": {
        "total": "601",
        "ok": "601",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.333",
        "ok": "0.333",
        "ko": "-"
    }
},
contents: {
"req_request-1-46da4": {
        type: "REQUEST",
        name: "request_1",
path: "request_1",
pathFormatted: "req_request-1-46da4",
stats: {
    "name": "request_1",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "604",
        "ok": "604",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "604",
        "ok": "604",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "604",
        "ok": "604",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "604",
        "ok": "604",
        "ko": "-"
    },
    "percentiles2": {
        "total": "604",
        "ok": "604",
        "ko": "-"
    },
    "percentiles3": {
        "total": "604",
        "ok": "604",
        "ko": "-"
    },
    "percentiles4": {
        "total": "604",
        "ok": "604",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.167",
        "ok": "0.167",
        "ko": "-"
    }
}
    },"req_request-1-redir-7e85b": {
        type: "REQUEST",
        name: "request_1 Redirect 1",
path: "request_1 Redirect 1",
pathFormatted: "req_request-1-redir-7e85b",
stats: {
    "name": "request_1 Redirect 1",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "302",
        "ok": "302",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "302",
        "ok": "302",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "302",
        "ok": "302",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "302",
        "ok": "302",
        "ko": "-"
    },
    "percentiles2": {
        "total": "302",
        "ok": "302",
        "ko": "-"
    },
    "percentiles3": {
        "total": "302",
        "ok": "302",
        "ko": "-"
    },
    "percentiles4": {
        "total": "302",
        "ok": "302",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.167",
        "ok": "0.167",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
