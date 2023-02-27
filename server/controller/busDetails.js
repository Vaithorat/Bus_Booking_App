const Routes = require("../model/cityRoutes");
const BusModel = require("../model/busSchema");
const BookingModel = require("../model/busBooking");
const { busRoutes } = require("../data/data2");

exports.getBusDetails = async (req, res, next) => {
  try {
    const { to, from, date } = req.body;
    const cities = await Routes.find({
      source: to,
      destination: from,
    }).populate("buses");
    if (!cities || cities.length === 0) {
      throw new Error("Could not find the selected routes");
    }
    res.status(200).json(cities);
  } catch (err) {
    console.log(err);
    res
      .status(400)
      .json({ message: "Could not find the selected routes", error: true });
  }
};

exports.bookTicket = async (req, res, next) => {
  const {
    userName,
    userMobile,
    userEmail,
    userGender,
    userAge,
    busId,
    selectedSeats,
    totalPrice,
    dateOfJourney,
    routeId,
  } = req.body;

  const booking = new BookingModel({
    busId,
    dateOfJourney,
    seatsBooked: selectedSeats,
    routeId,
    userName,
    userMobile,
    userEmail,
    userGender,
    userAge,
    totalPrice,
  });

  await booking.save();
  res.json(booking);
};

exports.getSeats = async (req, res, next) => {
  const { routeId, date, busId } = req.body;
  const booking = await BookingModel.find({
    busId,
    routeId,
    dateOfJourney: date,
  });

  const mappedArr = booking.length > 0 ? booking.map((el, i) => el.seatsBooked).flat() : [];

  res.status(200).json(mappedArr);
};

exports.getRoutesFromId = async (req, res, next) => {
  const { id } = req.params;

  const cities = await Routes.findById(id).populate("buses");
  res.json(cities);
};

exports.getRoutes = async (req, res, next) => {
  const routes = await Routes.find();

  const mappedArr = routes.map((el, i) => {
    return {
      source: el.source,
      destination: el.destination,
      startingTime: el.departureTime,
      reachingTime: el.arrivalTime,
    };
  });

  res.json(mappedArr);
};
