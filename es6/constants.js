/**
 * Constants
 * @module constants
 */

module.exports = {

    durationUnit: {
        year: ['y', 'years', 'year'],
        month: ['M', 'months', 'month'],
        day: ['d', 'days', 'day'],
        hour: ['h', 'hours', 'hour'],
        minute: ['m', 'minutes', 'minute'],
        second: ['s', 'second', 'seconds'],
        millisecond: ['ms', 'milliseconds', 'millisecond'],
        week: ['w', '', 'weeks', 'week'],
    },


    /**
     *
     * @type {number}
     */
    GREGORIAN_EPOCH: 1721425.5,

    /**
     *
     * @type {number}
     */
    PERSIAN_EPOCH: 1948320.5,

    /**
     *
     * @type {{}}
     */
    monthRange: {
        1: {
            name: {
                fa: "فروردین"
            },
            abbr: {
                fa: "فرو"
            }
        },
        2: {
            name: {
                fa: "اردیبهشت"
            },
            abbr: {
                fa: "ارد"
            }
        },
        3: {
            name: {
                fa: "خرداد"
            },
            abbr: {
                fa: "خرد"
            }
        },
        4: {
            name: {
                fa: "تیر"
            },
            abbr: {
                fa: "تیر"
            }
        },
        5: {
            name: {
                fa: "مرداد"
            },
            abbr: {
                fa: "مرد"
            }
        },
        6: {
            name: {
                fa: "شهریور"
            },
            abbr: {
                fa: "شهر"
            }
        },
        7: {
            name: {
                fa: "مهر"
            },
            abbr: {
                fa: "مهر"
            }
        },
        8: {
            name: {
                fa: "آبان"
            },
            abbr: {
                fa: "آبا"
            }

        },
        9: {
            name: {
                fa: "آذر"
            },
            abbr: {
                fa: "آذر"
            }
        },
        10: {
            name: {
                fa: "دی"
            },
            abbr: {
                fa: "دی"
            }
        },
        11: {
            name: {
                fa: "بهمن"
            },
            abbr: {
                fa: "بهم"
            }
        },
        12: {
            name: {
                fa: "اسفند"
            },
            abbr: {
                fa: "اسف"
            }
        }
    },


    /**
     *
     * @type {{}}
     */
    weekRange: {
        1: {
            name: {
                fa: "شنبه"
            },
            abbr: {
                fa: "ش"
            }
        },
        2: {
            name: {
                fa: "یکشنبه"
            },
            abbr: {
                fa: "ی"
            }
        },
        3: {
            name: {
                fa: "دوشنبه"
            },
            abbr: {
                fa: "د"
            }
        },
        4: {
            name: {
                fa: "سه شنبه"
            },
            abbr: {
                fa: "س"
            }
        },
        5: {
            name: {
                fa: "چهار شنبه"
            },
            abbr: {
                fa: "چ"
            }
        },
        6: {
            name: {
                fa: "پنج شنبه"
            },
            abbr: {
                fa: "پ"
            }
        },
        0: {
            name: {
                fa: "جمعه"
            },
            abbr: {
                fa: "ج"
            }
        }
    },


    /**
     *
     * @type {string[]}
     */
    persianDaysName: [
        "اورمزد",
        "بهمن",
        "اوردیبهشت",
        "شهریور",
        "سپندارمذ",
        "خورداد",
        "امرداد",
        "دی به آذز",
        "آذز",
        "آبان",
        "خورشید",
        "ماه",
        "تیر",
        "گوش",
        "دی به مهر",
        "مهر",
        "سروش",
        "رشن",
        "فروردین",
        "بهرام",
        "رام",
        "باد",
        "دی به دین",
        "دین",
        "ارد",
        "اشتاد",
        "آسمان",
        "زامیاد",
        "مانتره سپند",
        "انارام",
        "زیادی"]
}