// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  capabilities: {
    browserName: 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};
// SIG // Begin signature block
// SIG // MIIrhgYJKoZIhvcNAQcCoIIrdzCCK3MCAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // 7gRGNOgyMThF3YUQQbw5guDN82sBgjlFygnqEChJBaag
// SIG // ghF9MIIIjTCCB3WgAwIBAgITNgAAAeCBaGSnq8u//QAC
// SIG // AAAB4DANBgkqhkiG9w0BAQsFADBBMRMwEQYKCZImiZPy
// SIG // LGQBGRYDR0JMMRMwEQYKCZImiZPyLGQBGRYDQU1FMRUw
// SIG // EwYDVQQDEwxBTUUgQ1MgQ0EgMDEwHhcNMjQwMTIwMDEz
// SIG // NDAzWhcNMjUwMTE5MDEzNDAzWjAkMSIwIAYDVQQDExlN
// SIG // aWNyb3NvZnQgQXp1cmUgQ29kZSBTaWduMIIBIjANBgkq
// SIG // hkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAlCO1vYAudsum
// SIG // +1IrSlxi6b8equofqY31NJ65D3hubDRXMCqk++UgHO3V
// SIG // rlWgevU7Y5Hf3x8Xyp73VXLI2nSjscX+Cw3u/sZ4nn8E
// SIG // 6gfdVzT/vTxcepAmr8VB55dBxYWnWd7dWPHVRlMmgI2Q
// SIG // 0U0VCz1v/aZxgiEMr00ucvOzMf+dFjJO3Ng9dhlNedQY
// SIG // X1qIzDzaW3WGUVWiCZsw814wQQA18Agh3hixHD9nTMA8
// SIG // FiyTWJlEM8gO9BCvQKF/CxDFxLlQ4aa0MmtQiMy/ibOR
// SIG // HZv94s5NjQMFU6DnGLwmPjxn+WsZ4AllRdtq+EILVFtF
// SIG // zlBW1qbuvWYwpzuIKBjyKQIDAQABo4IFmTCCBZUwKQYJ
// SIG // KwYBBAGCNxUKBBwwGjAMBgorBgEEAYI3WwEBMAoGCCsG
// SIG // AQUFBwMDMD0GCSsGAQQBgjcVBwQwMC4GJisGAQQBgjcV
// SIG // CIaQ4w2E1bR4hPGLPoWb3RbOnRKBYIPdzWaGlIwyAgFk
// SIG // AgEOMIICdgYIKwYBBQUHAQEEggJoMIICZDBiBggrBgEF
// SIG // BQcwAoZWaHR0cDovL2NybC5taWNyb3NvZnQuY29tL3Br
// SIG // aWluZnJhL0NlcnRzL0JZMlBLSUNTQ0EwMS5BTUUuR0JM
// SIG // X0FNRSUyMENTJTIwQ0ElMjAwMSgyKS5jcnQwUgYIKwYB
// SIG // BQUHMAKGRmh0dHA6Ly9jcmwxLmFtZS5nYmwvYWlhL0JZ
// SIG // MlBLSUNTQ0EwMS5BTUUuR0JMX0FNRSUyMENTJTIwQ0El
// SIG // MjAwMSgyKS5jcnQwUgYIKwYBBQUHMAKGRmh0dHA6Ly9j
// SIG // cmwyLmFtZS5nYmwvYWlhL0JZMlBLSUNTQ0EwMS5BTUUu
// SIG // R0JMX0FNRSUyMENTJTIwQ0ElMjAwMSgyKS5jcnQwUgYI
// SIG // KwYBBQUHMAKGRmh0dHA6Ly9jcmwzLmFtZS5nYmwvYWlh
// SIG // L0JZMlBLSUNTQ0EwMS5BTUUuR0JMX0FNRSUyMENTJTIw
// SIG // Q0ElMjAwMSgyKS5jcnQwUgYIKwYBBQUHMAKGRmh0dHA6
// SIG // Ly9jcmw0LmFtZS5nYmwvYWlhL0JZMlBLSUNTQ0EwMS5B
// SIG // TUUuR0JMX0FNRSUyMENTJTIwQ0ElMjAwMSgyKS5jcnQw
// SIG // ga0GCCsGAQUFBzAChoGgbGRhcDovLy9DTj1BTUUlMjBD
// SIG // UyUyMENBJTIwMDEsQ049QUlBLENOPVB1YmxpYyUyMEtl
// SIG // eSUyMFNlcnZpY2VzLENOPVNlcnZpY2VzLENOPUNvbmZp
// SIG // Z3VyYXRpb24sREM9QU1FLERDPUdCTD9jQUNlcnRpZmlj
// SIG // YXRlP2Jhc2U/b2JqZWN0Q2xhc3M9Y2VydGlmaWNhdGlv
// SIG // bkF1dGhvcml0eTAdBgNVHQ4EFgQUp93M5xkvs0cwfyDe
// SIG // w4UnPUpioUswDgYDVR0PAQH/BAQDAgeAMFQGA1UdEQRN
// SIG // MEukSTBHMS0wKwYDVQQLEyRNaWNyb3NvZnQgSXJlbGFu
// SIG // ZCBPcGVyYXRpb25zIExpbWl0ZWQxFjAUBgNVBAUTDTIz
// SIG // NjE2Nys1MDE5NzEwggHmBgNVHR8EggHdMIIB2TCCAdWg
// SIG // ggHRoIIBzYY/aHR0cDovL2NybC5taWNyb3NvZnQuY29t
// SIG // L3BraWluZnJhL0NSTC9BTUUlMjBDUyUyMENBJTIwMDEo
// SIG // MikuY3JshjFodHRwOi8vY3JsMS5hbWUuZ2JsL2NybC9B
// SIG // TUUlMjBDUyUyMENBJTIwMDEoMikuY3JshjFodHRwOi8v
// SIG // Y3JsMi5hbWUuZ2JsL2NybC9BTUUlMjBDUyUyMENBJTIw
// SIG // MDEoMikuY3JshjFodHRwOi8vY3JsMy5hbWUuZ2JsL2Ny
// SIG // bC9BTUUlMjBDUyUyMENBJTIwMDEoMikuY3JshjFodHRw
// SIG // Oi8vY3JsNC5hbWUuZ2JsL2NybC9BTUUlMjBDUyUyMENB
// SIG // JTIwMDEoMikuY3JshoG9bGRhcDovLy9DTj1BTUUlMjBD
// SIG // UyUyMENBJTIwMDEoMiksQ049QlkyUEtJQ1NDQTAxLENO
// SIG // PUNEUCxDTj1QdWJsaWMlMjBLZXklMjBTZXJ2aWNlcyxD
// SIG // Tj1TZXJ2aWNlcyxDTj1Db25maWd1cmF0aW9uLERDPUFN
// SIG // RSxEQz1HQkw/Y2VydGlmaWNhdGVSZXZvY2F0aW9uTGlz
// SIG // dD9iYXNlP29iamVjdENsYXNzPWNSTERpc3RyaWJ1dGlv
// SIG // blBvaW50MB8GA1UdIwQYMBaAFJZRhOBrb3v+2Aarw/KF
// SIG // 5imuavnUMB8GA1UdJQQYMBYGCisGAQQBgjdbAQEGCCsG
// SIG // AQUFBwMDMA0GCSqGSIb3DQEBCwUAA4IBAQCiadnRYACw
// SIG // zKwj9B+IF+9ae7mrgOh3tl9t9efBsSXxg6ed8jCLXPAm
// SIG // gzyM+TSMyoE4kIjT0LrHI41p9YcgwY2UKKo/Kpg0NuXx
// SIG // 8/cIdfpra6669hIxEuGHwMH3VlOrMxoT0rNdGjtRd+aB
// SIG // aOAuHtjo+euoBEY2RlIVPXh3PmqTHAz5bVPmcUyT6xsm
// SIG // WO0fMGbIT6qf13n49ml6QWT0EgQLPeXzsMB5oAHlWClx
// SIG // v98RK+no0UWOAU/zn6GQqqZfKZCTFqUGwyjDDwznopGJ
// SIG // 2Qxplm6PP1/sRdgIfQdm0MDbMYMwPcVwJ9JhGnq2Owfi
// SIG // KsswbypzC7E91lCROSQn8CL7MIII6DCCBtCgAwIBAgIT
// SIG // HwAAAFHqj/accwyoOwAAAAAAUTANBgkqhkiG9w0BAQsF
// SIG // ADA8MRMwEQYKCZImiZPyLGQBGRYDR0JMMRMwEQYKCZIm
// SIG // iZPyLGQBGRYDQU1FMRAwDgYDVQQDEwdhbWVyb290MB4X
// SIG // DTIxMDUyMTE4NDQxNFoXDTI2MDUyMTE4NTQxNFowQTET
// SIG // MBEGCgmSJomT8ixkARkWA0dCTDETMBEGCgmSJomT8ixk
// SIG // ARkWA0FNRTEVMBMGA1UEAxMMQU1FIENTIENBIDAxMIIB
// SIG // IjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyZpS
// SIG // CX0Bno1W1yqXMhT6BUlJZWpa4p3xFeiTHO4vm2Q6C/az
// SIG // R5xwxnyYHrkSGDtS2P9X+KDE64V20mmEQkubxnPNeOVn
// SIG // E2RvdPGxgwlq+BhS3ONdVsQPj79q7XgHM9HhzB9+qk0P
// SIG // C9KN1zm9p/seyiRS6JF1dbOqRf1pUl7FAVxmgiCFgV8h
// SIG // HIb/rDPXig7FDi3S0yEx2CUDVpIq8jEhG8anUFE1WYxM
// SIG // +ni0S5KHwwKPKV4qyGDoDO+9AmDoma3Chyu5WDlW5cdt
// SIG // qXTWsGPE3umtnX6AmlldUFLms4OVR4guKf+n5LIBCC6b
// SIG // TiocfXPomqYjYTKx7AGMfaVLaaXmhQIDAQABo4IE3DCC
// SIG // BNgwEgYJKwYBBAGCNxUBBAUCAwIAAjAjBgkrBgEEAYI3
// SIG // FQIEFgQUEmgkQiFHy9RrvjHPIKTACyN/P0cwHQYDVR0O
// SIG // BBYEFJZRhOBrb3v+2Aarw/KF5imuavnUMIIBBAYDVR0l
// SIG // BIH8MIH5BgcrBgEFAgMFBggrBgEFBQcDAQYIKwYBBQUH
// SIG // AwIGCisGAQQBgjcUAgEGCSsGAQQBgjcVBgYKKwYBBAGC
// SIG // NwoDDAYJKwYBBAGCNxUGBggrBgEFBQcDCQYIKwYBBQUI
// SIG // AgIGCisGAQQBgjdAAQEGCysGAQQBgjcKAwQBBgorBgEE
// SIG // AYI3CgMEBgkrBgEEAYI3FQUGCisGAQQBgjcUAgIGCisG
// SIG // AQQBgjcUAgMGCCsGAQUFBwMDBgorBgEEAYI3WwEBBgor
// SIG // BgEEAYI3WwIBBgorBgEEAYI3WwMBBgorBgEEAYI3WwUB
// SIG // BgorBgEEAYI3WwQBBgorBgEEAYI3WwQCMBkGCSsGAQQB
// SIG // gjcUAgQMHgoAUwB1AGIAQwBBMAsGA1UdDwQEAwIBhjAS
// SIG // BgNVHRMBAf8ECDAGAQH/AgEAMB8GA1UdIwQYMBaAFCle
// SIG // UV5krjS566ycDaeMdQHRCQsoMIIBaAYDVR0fBIIBXzCC
// SIG // AVswggFXoIIBU6CCAU+GMWh0dHA6Ly9jcmwubWljcm9z
// SIG // b2Z0LmNvbS9wa2lpbmZyYS9jcmwvYW1lcm9vdC5jcmyG
// SIG // I2h0dHA6Ly9jcmwyLmFtZS5nYmwvY3JsL2FtZXJvb3Qu
// SIG // Y3JshiNodHRwOi8vY3JsMy5hbWUuZ2JsL2NybC9hbWVy
// SIG // b290LmNybIYjaHR0cDovL2NybDEuYW1lLmdibC9jcmwv
// SIG // YW1lcm9vdC5jcmyGgapsZGFwOi8vL0NOPWFtZXJvb3Qs
// SIG // Q049QU1FUm9vdCxDTj1DRFAsQ049UHVibGljJTIwS2V5
// SIG // JTIwU2VydmljZXMsQ049U2VydmljZXMsQ049Q29uZmln
// SIG // dXJhdGlvbixEQz1BTUUsREM9R0JMP2NlcnRpZmljYXRl
// SIG // UmV2b2NhdGlvbkxpc3Q/YmFzZT9vYmplY3RDbGFzcz1j
// SIG // UkxEaXN0cmlidXRpb25Qb2ludDCCAasGCCsGAQUFBwEB
// SIG // BIIBnTCCAZkwRwYIKwYBBQUHMAKGO2h0dHA6Ly9jcmwu
// SIG // bWljcm9zb2Z0LmNvbS9wa2lpbmZyYS9jZXJ0cy9BTUVS
// SIG // b290X2FtZXJvb3QuY3J0MDcGCCsGAQUFBzAChitodHRw
// SIG // Oi8vY3JsMi5hbWUuZ2JsL2FpYS9BTUVSb290X2FtZXJv
// SIG // b3QuY3J0MDcGCCsGAQUFBzAChitodHRwOi8vY3JsMy5h
// SIG // bWUuZ2JsL2FpYS9BTUVSb290X2FtZXJvb3QuY3J0MDcG
// SIG // CCsGAQUFBzAChitodHRwOi8vY3JsMS5hbWUuZ2JsL2Fp
// SIG // YS9BTUVSb290X2FtZXJvb3QuY3J0MIGiBggrBgEFBQcw
// SIG // AoaBlWxkYXA6Ly8vQ049YW1lcm9vdCxDTj1BSUEsQ049
// SIG // UHVibGljJTIwS2V5JTIwU2VydmljZXMsQ049U2Vydmlj
// SIG // ZXMsQ049Q29uZmlndXJhdGlvbixEQz1BTUUsREM9R0JM
// SIG // P2NBQ2VydGlmaWNhdGU/YmFzZT9vYmplY3RDbGFzcz1j
// SIG // ZXJ0aWZpY2F0aW9uQXV0aG9yaXR5MA0GCSqGSIb3DQEB
// SIG // CwUAA4ICAQBQECO3Tw/o317Rrd7yadqcswPx1LvIYymk
// SIG // aTN6KcmuRt6HKa0Xe73Ux2/AQ30TfgA9GBJngweRykKB
// SIG // usRzyOU17iIubJvy3gA21dwtqtB0DsoEv1U/ptVu2v++
// SIG // doTCJ/i+GbssVXkgaX8H+6EOGEmT4evp4GbwR4HwWlc+
// SIG // Dvf8HH8PdUA2Z04CvcwIfckSipbNm84jxJ8XjmTFTWsc
// SIG // ldL9edj2NsY6iGnyJFIyur2PS7VRYyV3p1VAJp91gj1j
// SIG // RQtWEyCB8P5g9nE3z8u0ANaU/hjwEQCrdGyravWgnf2J
// SIG // tG+bT26YAokbc8m+32zUtXRO+NK3tAjhOu2FdsG3qNrF
// SIG // 4sc7y37R/C+7Pcb/cFfhttqsirepZii4xStcjMODYuXz
// SIG // Gm3IJs0b0owHG6oKd7ZOGvHpmmh9K8/DLriD/sq8bURD
// SIG // 10qi/wuW8zM7IpLg1vcR9dIK2mc0pj44pc6UX0XbttP/
// SIG // VEJgu3lT2eI9VjWtaKjx38xE9woSMyekPRtzTwgfuysF
// SIG // 9DkJisr+yA4po/FPxpbBw9c/hBf32DH/GFxteS2pmjgK
// SIG // IbMP8sDukmEq3lVvuWNJsybrZwQvQpvaM49fv+JKpLK5
// SIG // YWYEfwksYRR9wU8Hh/ID9hRCEkbUoQ2W7mMpsp2Nbp/k
// SIG // cn4ivfolUy3Q9Yf0scsQ6WTLYpm+AoCUJTGCGWEwghld
// SIG // AgEBMFgwQTETMBEGCgmSJomT8ixkARkWA0dCTDETMBEG
// SIG // CgmSJomT8ixkARkWA0FNRTEVMBMGA1UEAxMMQU1FIENT
// SIG // IENBIDAxAhM2AAAB4IFoZKery7/9AAIAAAHgMA0GCWCG
// SIG // SAFlAwQCAQUAoIGuMBkGCSqGSIb3DQEJAzEMBgorBgEE
// SIG // AYI3AgEEMBwGCisGAQQBgjcCAQsxDjAMBgorBgEEAYI3
// SIG // AgEVMC8GCSqGSIb3DQEJBDEiBCAaDLcipPVzFheZ/xrO
// SIG // U8IufuZV/PVN5JmNz0efxfmCazBCBgorBgEEAYI3AgEM
// SIG // MTQwMqAUgBIATQBpAGMAcgBvAHMAbwBmAHShGoAYaHR0
// SIG // cDovL3d3dy5taWNyb3NvZnQuY29tMA0GCSqGSIb3DQEB
// SIG // AQUABIIBAHtR/sHXguBU1rA+A6cE6hwPHuQ9/Cyy1tsk
// SIG // 8qc5Q1uSA1FWOpAqqVF5HW57cVZTtKFxSq/Wr+ugo644
// SIG // cWsPd65MCOsTIMQE3KNOthOOuZAoW86QQ8bWfQavHqum
// SIG // 7B2j2PCYR3YGtsy2y0gGdbtG936jCHAx/VO3LVlYj8KF
// SIG // vMihoYcXneEiMHU8X+mDGTnWrEZZONyvPSMcqsE4gfQl
// SIG // l3/4Jpbmzhc1NSs9u+ruBuXBDLV+wEdQNEqrG6pBLu+6
// SIG // BMcqCsBKC2Uv1fKuuQGgD/E3MHcxzmCm2anTL1nIL/AW
// SIG // o8FL44yxTyQ/vvppVfK1BwmQpKkbprvpx0T5yNNtc+ah
// SIG // ghcpMIIXJQYKKwYBBAGCNwMDATGCFxUwghcRBgkqhkiG
// SIG // 9w0BBwKgghcCMIIW/gIBAzEPMA0GCWCGSAFlAwQCAQUA
// SIG // MIIBWQYLKoZIhvcNAQkQAQSgggFIBIIBRDCCAUACAQEG
// SIG // CisGAQQBhFkKAwEwMTANBglghkgBZQMEAgEFAAQg6YQ1
// SIG // 1JskS51I81P+v701Ku1Q+nK6aJ/vDVaLVbDwMEACBmX8
// SIG // bsPqpxgTMjAyNDAzMjUyMTU2MjguMzA4WjAEgAIB9KCB
// SIG // 2KSB1TCB0jELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldh
// SIG // c2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNV
// SIG // BAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEtMCsGA1UE
// SIG // CxMkTWljcm9zb2Z0IElyZWxhbmQgT3BlcmF0aW9ucyBM
// SIG // aW1pdGVkMSYwJAYDVQQLEx1UaGFsZXMgVFNTIEVTTjow
// SIG // ODQyLTRCRTYtQzI5QTElMCMGA1UEAxMcTWljcm9zb2Z0
// SIG // IFRpbWUtU3RhbXAgU2VydmljZaCCEXgwggcnMIIFD6AD
// SIG // AgECAhMzAAAB2o7VyVoA0RGxAAEAAAHaMA0GCSqGSIb3
// SIG // DQEBCwUAMHwxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpX
// SIG // YXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4wHAYD
// SIG // VQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xJjAkBgNV
// SIG // BAMTHU1pY3Jvc29mdCBUaW1lLVN0YW1wIFBDQSAyMDEw
// SIG // MB4XDTIzMTAxMjE5MDY1OVoXDTI1MDExMDE5MDY1OVow
// SIG // gdIxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5n
// SIG // dG9uMRAwDgYDVQQHEwdSZWRtb25kMR4wHAYDVQQKExVN
// SIG // aWNyb3NvZnQgQ29ycG9yYXRpb24xLTArBgNVBAsTJE1p
// SIG // Y3Jvc29mdCBJcmVsYW5kIE9wZXJhdGlvbnMgTGltaXRl
// SIG // ZDEmMCQGA1UECxMdVGhhbGVzIFRTUyBFU046MDg0Mi00
// SIG // QkU2LUMyOUExJTAjBgNVBAMTHE1pY3Jvc29mdCBUaW1l
// SIG // LVN0YW1wIFNlcnZpY2UwggIiMA0GCSqGSIb3DQEBAQUA
// SIG // A4ICDwAwggIKAoICAQCTkAYIdrVRUdY/I0AODQ3/G3Fa
// SIG // 10jdPNAjSj0kKO0ue7Apz1NBSheO8Ni+qh7cJuBJwpRd
// SIG // nK7lxaf5ez6TEINuRO1/MQ5r8a/AQROogEgDwn603m7r
// SIG // wLGVnCWIcu6a4ArgX+zonV6YLFtcvKelbO7A9mrqf9Lr
// SIG // 3mMXl5SrbD4zAqZR5JNG2vh4C4aNCevCnY4twzNiufcB
// SIG // 8vca7bGCvl/Xq2wxmdppl9++uWkuUO/7oA8TFYM8o/NM
// SIG // iZ+lC55Jw/YuJFEMVYaldXXPwxelAXrs37pJDHne7a81
// SIG // BGTEcpWu6ob8FHkJYMwkIaWY8/s7EIKV5T3M7xndIqq+
// SIG // 5QAsH1RqIOaZSM3RMb7dUwPCZnn/NfWkysB9SFRCMGCw
// SIG // Orr0vJEXQOkcbzHG//7pTYyLhnHsspDAFxMp1ayxvVby
// SIG // uK36wrBi9499C5onboPqMK3Ao0GoGJqxpNYQcpF4paPW
// SIG // AfEMsuUNSoRrh+uVd8xcvGtJMGygUbPFUeB7aD2MPc9Q
// SIG // 3XCX2QTtnYc198gDIqQhpukpr5r2r0bF4cvNOY4gKQ8j
// SIG // frNP2+6LNs/IkVhiZOjPbrk9uPd4BVf/SSxoOWCSQiVy
// SIG // PssZDvzl52SbLhrdPs1i3R0uFyFwRte6D7uSrBX0Ux0R
// SIG // JaEdnSOhsGmsSMg8kh2DrbyMnZWu7uJX53wo2P6ikwID
// SIG // AQABo4IBSTCCAUUwHQYDVR0OBBYEFKF8jclRPWYTlYsx
// SIG // FFcITYC/D19FMB8GA1UdIwQYMBaAFJ+nFV0AXmJdg/Tl
// SIG // 0mWnG1M1GelyMF8GA1UdHwRYMFYwVKBSoFCGTmh0dHA6
// SIG // Ly93d3cubWljcm9zb2Z0LmNvbS9wa2lvcHMvY3JsL01p
// SIG // Y3Jvc29mdCUyMFRpbWUtU3RhbXAlMjBQQ0ElMjAyMDEw
// SIG // KDEpLmNybDBsBggrBgEFBQcBAQRgMF4wXAYIKwYBBQUH
// SIG // MAKGUGh0dHA6Ly93d3cubWljcm9zb2Z0LmNvbS9wa2lv
// SIG // cHMvY2VydHMvTWljcm9zb2Z0JTIwVGltZS1TdGFtcCUy
// SIG // MFBDQSUyMDIwMTAoMSkuY3J0MAwGA1UdEwEB/wQCMAAw
// SIG // FgYDVR0lAQH/BAwwCgYIKwYBBQUHAwgwDgYDVR0PAQH/
// SIG // BAQDAgeAMA0GCSqGSIb3DQEBCwUAA4ICAQC5g1XU7biN
// SIG // IwBLeNTtjjPAlNt+0xjMoaxq+xcyghBWl8baKpPyDm0K
// SIG // 4qtXGh1Ydr8rkNuJ8903Tgb+63LP6pz4zsZ1xS8mT3ml
// SIG // i7DbgEVZlFYslWF412AeQ8M2lmYEnGPBii+8ho8lq4e/
// SIG // FiVIIe6xNfuVQ+YdP+q7PXQUagMyPX4Wc+7KbI7fL58e
// SIG // dFhMWwUkh+632mx3p3aXqm05lv0X3Gk/hhSLE/oNno+8
// SIG // ESiKv0IZ7KBfJqRTTx1dav1iv6xfwoaL5ISTA75arRE1
// SIG // ovexqJTkimpmQvW2IHDyn89vHnduVictdFbUPT+fgv9n
// SIG // Tnw2s9UZnjm9uym3oIWtEnz3K4k3zkVb6jw0mt5/Te3Y
// SIG // U2O/uPSPHr6GnfYXWfAnyDj37cLd8U19kYTGSQlaBZWm
// SIG // x3L32/OK2hTOnM+RGJPsdWlRIl7YCukdMZ9cIzFx39AF
// SIG // pUo6kZM70p0SsxbGcBJe+FWoZSlYSPgovUU/fuhnNMVs
// SIG // ye80CFBRNyYosefuyi/AKx3wWPVBS8+LJ26Ce0IqdyAA
// SIG // 25FOGS9IkPI/CMa2u2kmH06FHn5nLd3TOvX3+BHodiof
// SIG // TbCooqYefPQKf8UtYxEpa34y/4P2W6GkuXfWtnwOffJr
// SIG // mw7yw+ceTz9++9NL5v2PjyIZqdn077ktrJ3XmQZsk6nF
// SIG // DR0TZgpPp41d5zCCB3EwggVZoAMCAQICEzMAAAAVxedr
// SIG // ngKbSZkAAAAAABUwDQYJKoZIhvcNAQELBQAwgYgxCzAJ
// SIG // BgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAw
// SIG // DgYDVQQHEwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3Nv
// SIG // ZnQgQ29ycG9yYXRpb24xMjAwBgNVBAMTKU1pY3Jvc29m
// SIG // dCBSb290IENlcnRpZmljYXRlIEF1dGhvcml0eSAyMDEw
// SIG // MB4XDTIxMDkzMDE4MjIyNVoXDTMwMDkzMDE4MzIyNVow
// SIG // fDELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0
// SIG // b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1p
// SIG // Y3Jvc29mdCBDb3Jwb3JhdGlvbjEmMCQGA1UEAxMdTWlj
// SIG // cm9zb2Z0IFRpbWUtU3RhbXAgUENBIDIwMTAwggIiMA0G
// SIG // CSqGSIb3DQEBAQUAA4ICDwAwggIKAoICAQDk4aZM57Ry
// SIG // IQt5osvXJHm9DtWC0/3unAcH0qlsTnXIyjVX9gF/bErg
// SIG // 4r25PhdgM/9cT8dm95VTcVrifkpa/rg2Z4VGIwy1jRPP
// SIG // dzLAEBjoYH1qUoNEt6aORmsHFPPFdvWGUNzBRMhxXFEx
// SIG // N6AKOG6N7dcP2CZTfDlhAnrEqv1yaa8dq6z2Nr41JmTa
// SIG // mDu6GnszrYBbfowQHJ1S/rboYiXcag/PXfT+jlPP1uyF
// SIG // Vk3v3byNpOORj7I5LFGc6XBpDco2LXCOMcg1KL3jtIck
// SIG // w+DJj361VI/c+gVVmG1oO5pGve2krnopN6zL64NF50Zu
// SIG // yjLVwIYwXE8s4mKyzbnijYjklqwBSru+cakXW2dg3viS
// SIG // kR4dPf0gz3N9QZpGdc3EXzTdEonW/aUgfX782Z5F37Zy
// SIG // L9t9X4C626p+Nuw2TPYrbqgSUei/BQOj0XOmTTd0lBw0
// SIG // gg/wEPK3Rxjtp+iZfD9M269ewvPV2HM9Q07BMzlMjgK8
// SIG // QmguEOqEUUbi0b1qGFphAXPKZ6Je1yh2AuIzGHLXpyDw
// SIG // wvoSCtdjbwzJNmSLW6CmgyFdXzB0kZSU2LlQ+QuJYfM2
// SIG // BjUYhEfb3BvR/bLUHMVr9lxSUV0S2yW6r1AFemzFER1y
// SIG // 7435UsSFF5PAPBXbGjfHCBUYP3irRbb1Hode2o+eFnJp
// SIG // xq57t7c+auIurQIDAQABo4IB3TCCAdkwEgYJKwYBBAGC
// SIG // NxUBBAUCAwEAATAjBgkrBgEEAYI3FQIEFgQUKqdS/mTE
// SIG // mr6CkTxGNSnPEP8vBO4wHQYDVR0OBBYEFJ+nFV0AXmJd
// SIG // g/Tl0mWnG1M1GelyMFwGA1UdIARVMFMwUQYMKwYBBAGC
// SIG // N0yDfQEBMEEwPwYIKwYBBQUHAgEWM2h0dHA6Ly93d3cu
// SIG // bWljcm9zb2Z0LmNvbS9wa2lvcHMvRG9jcy9SZXBvc2l0
// SIG // b3J5Lmh0bTATBgNVHSUEDDAKBggrBgEFBQcDCDAZBgkr
// SIG // BgEEAYI3FAIEDB4KAFMAdQBiAEMAQTALBgNVHQ8EBAMC
// SIG // AYYwDwYDVR0TAQH/BAUwAwEB/zAfBgNVHSMEGDAWgBTV
// SIG // 9lbLj+iiXGJo0T2UkFvXzpoYxDBWBgNVHR8ETzBNMEug
// SIG // SaBHhkVodHRwOi8vY3JsLm1pY3Jvc29mdC5jb20vcGtp
// SIG // L2NybC9wcm9kdWN0cy9NaWNSb29DZXJBdXRfMjAxMC0w
// SIG // Ni0yMy5jcmwwWgYIKwYBBQUHAQEETjBMMEoGCCsGAQUF
// SIG // BzAChj5odHRwOi8vd3d3Lm1pY3Jvc29mdC5jb20vcGtp
// SIG // L2NlcnRzL01pY1Jvb0NlckF1dF8yMDEwLTA2LTIzLmNy
// SIG // dDANBgkqhkiG9w0BAQsFAAOCAgEAnVV9/Cqt4SwfZwEx
// SIG // JFvhnnJL/Klv6lwUtj5OR2R4sQaTlz0xM7U518JxNj/a
// SIG // ZGx80HU5bbsPMeTCj/ts0aGUGCLu6WZnOlNN3Zi6th54
// SIG // 2DYunKmCVgADsAW+iehp4LoJ7nvfam++Kctu2D9IdQHZ
// SIG // GN5tggz1bSNU5HhTdSRXud2f8449xvNo32X2pFaq95W2
// SIG // KFUn0CS9QKC/GbYSEhFdPSfgQJY4rPf5KYnDvBewVIVC
// SIG // s/wMnosZiefwC2qBwoEZQhlSdYo2wh3DYXMuLGt7bj8s
// SIG // CXgU6ZGyqVvfSaN0DLzskYDSPeZKPmY7T7uG+jIa2Zb0
// SIG // j/aRAfbOxnT99kxybxCrdTDFNLB62FD+CljdQDzHVG2d
// SIG // Y3RILLFORy3BFARxv2T5JL5zbcqOCb2zAVdJVGTZc9d/
// SIG // HltEAY5aGZFrDZ+kKNxnGSgkujhLmm77IVRrakURR6nx
// SIG // t67I6IleT53S0Ex2tVdUCbFpAUR+fKFhbHP+CrvsQWY9
// SIG // af3LwUFJfn6Tvsv4O+S3Fb+0zj6lMVGEvL8CwYKiexcd
// SIG // FYmNcP7ntdAoGokLjzbaukz5m/8K6TT4JDVnK+ANuOaM
// SIG // mdbhIurwJ0I9JZTmdHRbatGePu1+oDEzfbzL6Xu/OHBE
// SIG // 0ZDxyKs6ijoIYn/ZcGNTTY3ugm2lBRDBcQZqELQdVTNY
// SIG // s6FwZvKhggLUMIICPQIBATCCAQChgdikgdUwgdIxCzAJ
// SIG // BgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAw
// SIG // DgYDVQQHEwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3Nv
// SIG // ZnQgQ29ycG9yYXRpb24xLTArBgNVBAsTJE1pY3Jvc29m
// SIG // dCBJcmVsYW5kIE9wZXJhdGlvbnMgTGltaXRlZDEmMCQG
// SIG // A1UECxMdVGhhbGVzIFRTUyBFU046MDg0Mi00QkU2LUMy
// SIG // OUExJTAjBgNVBAMTHE1pY3Jvc29mdCBUaW1lLVN0YW1w
// SIG // IFNlcnZpY2WiIwoBATAHBgUrDgMCGgMVAEKiHyGJYx1G
// SIG // zaGNP8I4V0Z/7EgNoIGDMIGApH4wfDELMAkGA1UEBhMC
// SIG // VVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcT
// SIG // B1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jw
// SIG // b3JhdGlvbjEmMCQGA1UEAxMdTWljcm9zb2Z0IFRpbWUt
// SIG // U3RhbXAgUENBIDIwMTAwDQYJKoZIhvcNAQEFBQACBQDp
// SIG // rDMcMCIYDzIwMjQwMzI2MDEzMDA0WhgPMjAyNDAzMjcw
// SIG // MTMwMDRaMHQwOgYKKwYBBAGEWQoEATEsMCowCgIFAOms
// SIG // MxwCAQAwBwIBAAICIcgwBwIBAAICEb0wCgIFAOmthJwC
// SIG // AQAwNgYKKwYBBAGEWQoEAjEoMCYwDAYKKwYBBAGEWQoD
// SIG // AqAKMAgCAQACAwehIKEKMAgCAQACAwGGoDANBgkqhkiG
// SIG // 9w0BAQUFAAOBgQAAz6f7r89AKniZB44UIZj+SOqjP43E
// SIG // TaOBqIzZgnVh7UpgLKVWi+TZExAmHHINpmlrvV3GPJzN
// SIG // DuwYYlU3GgmsHb1l4XFg21EmAMP52u6E9xwBzFz4SWNx
// SIG // exvrI4bvxVye1AZ10VfcVK65pfv0fl+x1b8r3infZ8r6
// SIG // jKnCNA3D7jGCBA0wggQJAgEBMIGTMHwxCzAJBgNVBAYT
// SIG // AlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQH
// SIG // EwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29y
// SIG // cG9yYXRpb24xJjAkBgNVBAMTHU1pY3Jvc29mdCBUaW1l
// SIG // LVN0YW1wIFBDQSAyMDEwAhMzAAAB2o7VyVoA0RGxAAEA
// SIG // AAHaMA0GCWCGSAFlAwQCAQUAoIIBSjAaBgkqhkiG9w0B
// SIG // CQMxDQYLKoZIhvcNAQkQAQQwLwYJKoZIhvcNAQkEMSIE
// SIG // IJNUJBhPgBTUnO2iJ2vFgnq31AFwpz3XlsB3uv+mDtig
// SIG // MIH6BgsqhkiG9w0BCRACLzGB6jCB5zCB5DCBvQQgIqWj
// SIG // aWLA756k3veQ49QtPdNtCOZY4m61v53SAjsYPcYwgZgw
// SIG // gYCkfjB8MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2Fz
// SIG // aGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UE
// SIG // ChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMSYwJAYDVQQD
// SIG // Ex1NaWNyb3NvZnQgVGltZS1TdGFtcCBQQ0EgMjAxMAIT
// SIG // MwAAAdqO1claANERsQABAAAB2jAiBCBejtKyQWJf3XNg
// SIG // r/P8Xj7zAtLm8Jx1R4EMziBaT7jklTANBgkqhkiG9w0B
// SIG // AQsFAASCAgBY5b/jbZkVeBz/50/3PXE+gk5tq8HWKcU3
// SIG // /Ziq0Tm6mXYTulD9iVdo9N6AcqIR5Mi4DYDmKKDuipxC
// SIG // K9DTSBB/lt7/AJJLnoPJdK6iHpPRa/1hMbmEcpEsSIA0
// SIG // 8/gOENFk7SpOsgUdbbp3+w+fwJwrwI6FYSGluYmC9IC7
// SIG // r5fkpaw6ifIb/UoUISh7e4K9RKssTN/mGwJ7M18O2mLa
// SIG // 05AC2e341f99V9CVoI8ifkHuus6PlptTBortPjHSaRI0
// SIG // IAyH9/Qx+wlY8yUbWCypEEBojAxwcQKAHxzJAI4y46vn
// SIG // o7pyNhP/zfRwUBQN+xDUkuqvpltEi22L7EK54RJHwvWB
// SIG // BXAI/TvTKiupjOdOu7hzsj3rXGFsM2PlewTEO6NyWOtn
// SIG // 7aNCAvmVty6Js8oCG9UB1fciDuUaZxCEAcmidS4JmtRs
// SIG // Mjc67krQNtV/PS439uJ7q9TqdNvnJXOx1lUMjopjQB3V
// SIG // dQqSvwU/6m/MyHqyj+ODmbXhLASba5XLWqzQNnC+G+Pg
// SIG // uJSeeGWm5/z6jW+mKJOLoioIvJ53VToKSUG/GbnBtZo4
// SIG // 4HrShkYSzONsBA/+4RNiSIjzzKsyu9Y6VRXv0ZoqMYtE
// SIG // 6Cp+PjKjuntqSa4Ekhj6DizA9D0N3qmiIVqdGCTuAUku
// SIG // bga7CGF08zvszoyU2T5jR7VmnATp1gov1g==
// SIG // End signature block
