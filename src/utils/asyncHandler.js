// M-1 (using promises)
const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}
export{ asyncHandler }


// M-2 (using try-catch)