// @flow

function viewCard(req: $Request, res: $Response, next: $NextFunction) {
  console.log(req.baseUrl1)

  req.model = {}
  req.model.cards = {}

  res.send('hello world')
}

export {
  viewCard
}
