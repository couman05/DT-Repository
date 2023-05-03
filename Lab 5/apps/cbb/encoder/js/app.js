// import getManchesterLevelEncoding from './baseband-codes'
// import getNRZL from './baseband-codes'

var app = new Vue({
    el: '#baseband-encoder',
    data: {
        bits: [],
        encodedBits: [],
        encoded_bits_nrzl: [],
        encoded_bits_nrz: [],
        encoded_bits_nrzs: [],
        encoded_bits_rz: [],
        status: '',
        numberOfBits: 16,
        validateBit: validateBit
    },
    created: function () {
        this.bits = getBitstream(this.numberOfBits);
    },
    methods: {
        encode: function(){
            this.encodedBits = getManchesterLevelEncoding(this.bits);
            this.encoded_bits_nrzl = getNRZL(this.bits);
            this.encoded_bits_nrz = getNRZ(this.bits);
            this.encoded_bits_nrzs = getNRZS(this.bits);
            this.encoded_bits_rz = getRZ(this.bits);
        }
    }
})
