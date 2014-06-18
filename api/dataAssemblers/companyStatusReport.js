var preGeneratedDataModel = require('../models/preGeneratedData.js');
var Q = require('q');
var utility = require('../utility.js');

exports.getCompanyStatusReport = function(seminarId){
    return Q.all([
        preGeneratedDataModel.findOne(seminarId)
    ])
    .spread(function(preGeneratedData){
        var allResults = preGeneratedData.allResults;

        var result = {
            company: {},
            brand: {},
            SKU: {}
        };


    })
}

function generateCompanyReport(allResults){
    var companyReport = [];

    allResults[0].p_Companies.forEach(function(company){
        if(!isCompanyExist(company.c_CompanyID, companyReport)){
            companyReport.push({
                companyId: ''
            })
        }
    })

    allResults.forEach(function(onePeriodResult){
        var onePeriodCompanyReport = {};

        onePeriodCompanyReport.period = onePeriodResult.period;

        onePeriodCompanyReport. = ;
    })

    function isCompanyExist(companyId, companyReport){
        return companyReport.some(function(company){
            return company.companyId === companyId;
        })
    }
}