//Object been defined
const televison = {
    brand: "Lg",
    color: "black",
    screenSizeInInches: 42,
    yearOfModell: 2022,
    isASmartTv: true,
    isTurnedOn: false,
    channelList: ["News","Sport","Weather", "Music","Movies",],
    channel: [{name:"News", channel:1},
    {name:"Sport", channel:2},
    {name:"Weather", channel:3},
    {name:"Music", channel:4},
    {name:"Movies", channel:5}],
    producer: {
        name: "LG",
        headquaters: "Seoul",
        founder: "Koo In-Hwoi",
        companyType: "public",
        numberOfEmployes: "75,000",
    },

    //Method to turn on the TV
    turnOn: function() {
        if (!this.isTurnedOn) {
          this.isTurnedOn = true;
          console.log("TV is now turned on.");
        } else {
          console.log("TV is already on.");
        }
      },

      //Method to turn off the TV
    turnOff: function() {
        if (!this.isTurnedOn) {
          this.isTurnedOn = false;
          console.log("TV is now turned off.");
        } else {
          console.log("TV is already off.");
        }
      },

      //Method to change the channel
      changeChannel: function(channelNumber) {
        if (this.isTurnedOn) {
          const channelName = this.channelList[channelNumber];
          if (channelName) {
            this.currentChannel = channelNumber;
            console.log(`Changed to channel ${channelNumber}: ${channelName}`);
          } else {
            console.log(`Channel ${channelNumber} not found.`);
          }
        } else {
          console.log("Can't change the channel. TV is off.");
        }
      },
    };
      


//Using the Telvison object 
console.log(televison);
console.log("Brand:",televison.brand);
console.log("Color:",televison.color);
console.log("Year of modell:",televison.yearOfModell);
console.log("ChannelList:",televison.channelList);
console.log("Channel:",televison.channel);
console.log("producer:",televison.producer);


televison.turnOn()
televison.turnOff()
televison.changeChannel(0)
televison.changeChannel(1)
televison.changeChannel(2)
televison.changeChannel(3)
televison.changeChannel(4)
televison.changeChannel(5)

//userinterface ca
const powerButton = document.getElementById("powerButton"); //Targeting id property
const channelUpButton = document.getElementById("channelUpButton"); //Targeting id property
const channelDownButton = document.getElementById("channelDownButton"); //Targeting id property
const channelDisplay = document.getElementById("channel"); //The dispaly off the channel 
const statusDisplay = document.getElementById("status"); // The staus of wich channel it`s on

let isTvOn = false;
let currentChannel = 0;

powerButton.addEventListener("click", () => {
    isTvOn = !isTvOn;
    updateStatusDispaly();
}); 

channelUpButton.addEventListener("click", () => {
    if (isTvOn);
    currentChannel++;
    updateStatusDispaly();
}); 

channelDownButton.addEventListener("click", () => {
    if (isTvOn);
    currentChannel--;
    updateStatusDispaly();
}); 

function updateStatusDispaly() {
    channelDisplay.textContent = `channel: ${currentChannel}`;
};

function updateStatusDispaly() {
    statusDisplay.textContent = isTvOn ? "Status: on" : "Status: Off";
    channelDisplay.style.visibility = isTvOn ? "Visible" : "Hidden;"
}

console.dir(powerButton);
console.dir(channelUpButton);
console.dir(channelDownButton);

powerButton.onclick = function(){
    console.log("Button is powered on");
}
channelUpButton.onclick = function(){
    console.log("The button has changed a channel up");
}
channelDownButton.onclick = function(){
    console.log("The button has changed a channel down");
}




 