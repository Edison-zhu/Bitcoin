module.exports = {

    getWalletHtml: (req, res) => {
        res.render("wallet.html");
    },

    getWalletInfoHtml: (req, res) => {
        res.render("walletInfo.html")
    },

    getTransactionHtml: (req, res) => 　{
        res.render("transaction.html")
    },

    getTransactionRecordHtml: (req, res) => 　{
        res.render("transactionRecord.html")
    },
}