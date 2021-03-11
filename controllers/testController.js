const catchAsync = require('../utils/catchAsync')

exports.testController = catchAsync((req, res, next) => {
    const testObject = {
        id: 52,
        value: 'tralalla'
    }

    res.status(200).json({
        status: 'success',
        data: testObject
    })
})
