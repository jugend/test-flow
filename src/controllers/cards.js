// @flow

function viewCard(req: $Request, res: $Response, next: $NextFunction) {
  req.model = {}
  req.model.cards = {}
  res.send('hello world')
}

export {
  viewCard
}
