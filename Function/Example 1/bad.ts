interface dateDetail {
  idOfPersonGoWith: string;
  starTime: string;
  endTime: string;
  clothe?: {
    kindOfShirt: string;
    kindOfPant: string;
  };
}

interface personDetail {
  userId: string;
  dateInformation: dateDetail;
}

const checkTheDateDetail1 = ({ userId, dateInformation }: personDetail) => {
  new Date() == new Date(dateInformation.starTime) &&
  userId == dateInformation.idOfPersonGoWith &&
  !!dateInformation.clothe &&
  dateInformation.clothe.kindOfPant
    ? true
    : false;
};
