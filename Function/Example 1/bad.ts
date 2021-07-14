// functions should be small
// do one thing !!!
// function name should say what they do
// avoid side effect
// remove unneeded code

interface dateDetail {
  idOfPersonGoWith: string
  starTime: string
  endTime: string
  clothe?: {
    kindOfShirt: string
    kindOfPant: string
  }
}

interface personDetail {
  userId: string
  dateInformation: dateDetail
}

const checkTheDateDetail1 = ({ userId, dateInformation }: personDetail) => {
  new Date() == new Date(dateInformation.starTime) &&
  userId == dateInformation.idOfPersonGoWith &&
  !!dateInformation.clothe &&
  dateInformation.clothe.kindOfPant
    ? true
    : false
}
