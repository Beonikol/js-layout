// Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()

// Підключіть файли роутів
const test = require('./test')
// Підключіть інші файли роутів, якщо є
const page2 = require('./page2')

// Об'єднайте файли роутів за потреби
router.use('/', test)
router.use('/page2', page2)
// Використовуйте інші файли роутів, якщо є

// Експортуємо глобальний роутер
module.exports = router
