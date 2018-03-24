'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Hotel = function () {
    function Hotel(hotelId, hotelName, hotelType) {
        _classCallCheck(this, Hotel);

        this.hotelId = hotelId;
        this.hotelName = hotelName;
        this.hotelType = hotelType;
    }

    _createClass(Hotel, [{
        key: 'displayHotel',
        value: function displayHotel() {
            console.log('Hai welcome to ' + this.hotelName, this.hotelType + ' Hotel Have fun!');
        }
    }]);

    return Hotel;
}();

var HotelStar = function (_Hotel) {
    _inherits(HotelStar, _Hotel);

    function HotelStar(hotelId, hotelName, hotelType, hotelStar) {
        _classCallCheck(this, HotelStar);

        var _this = _possibleConstructorReturn(this, (HotelStar.__proto__ || Object.getPrototypeOf(HotelStar)).call(this, hotelId, hotelName, hotelType));

        _this.hotelStar = hotelStar;
        return _this;
    }

    _createClass(HotelStar, [{
        key: 'displayHotelStar',
        value: function displayHotelStar() {
            console.log('Hai welcome to ' + this.hotelStar + ' Star Hotel' + this.hotelName);
        }
    }]);

    return HotelStar;
}(Hotel);

// let obj = new Hotel(100, 'Ashok Bhavan', 'Non-Veg' )
// obj.displayHotel();

var starObj = new HotelStar(100, 'Ashok Bhavan', 'Non-Veg', 5);
starObj.displayHotelStar();