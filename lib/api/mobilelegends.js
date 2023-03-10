const fetch = require('node-fetch')
const { default: axios } = require('axios')

module.exports = {
  /**
   * mendapakan nickname mobile legends dari id user
   * @param {String} id id mobile legends
   * @param {String} zoneId id zone
   * @returns {Promise<Object>}
   * @example  await mobileLegends.nickNameMobileLegends('109088431', '2558')
   */
  async nickNameMobileLegends(id, zoneId) {
    return new Promise(async (resolve, reject) => {
      axios
        .post(
          'https://api.duniagames.co.id/api/transaction/v1/top-up/inquiry/store',
          new URLSearchParams(
            Object.entries({
              productId: '1',
              itemId: '2',
              catalogId: '57',
              paymentId: '352',
              gameId: id,
              zoneId: zoneId,
              product_ref: 'REG',
              product_ref_denom: 'AE',
            })
          ),
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              Referer: 'https://www.duniagames.co.id/',
              Accept: 'application/json',
            },
          }
        )
        .then((response) => {
          resolve(response.data.data.gameDetail)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  async topupMobileLegens(id, zoneId, nominal) {
    return new Promise(async (resolve, reject) => {
      const json = require('./mobilelegends.json')
      const data = nominal in json ? json[nominal] : null
      if (!data) {
        reject('nominal tidak tersedia')
      }
      data.gameId = id
      data.zoneId = zoneId
      axios
        .post('https://api.duniagames.co.id/api/transaction/v1/top-up/inquiry/store', new URLSearchParams(Object.entries(data)), {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Referer: 'https://www.duniagames.co.id/',
            Accept: 'application/json',
          },
        })
        .then((response) => {
          resolve(response.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  async payDiamond(returnTopup, phoneNumber) {
    return new Promise(async (resolve, reject) => {
      if (!phoneNumber.startsWith('08')) return reject('input nomor dengan 08')
      axios
        .post(
          'https://api.duniagames.co.id/api/transaction/v1/top-up/transaction/store',
          new URLSearchParams(
            Object.entries({
              inquiryId: returnTopup.data.inquiryId,
              phoneNumber: phoneNumber,
              transactionId: returnTopup.data.transactionId,
            })
          ),
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              Referer: 'https://www.duniagames.co.id/',
              Accept: 'application/json',
            },
          }
        )
        .then((response) => {
          resolve(response.data.data.elisaConfig)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
}