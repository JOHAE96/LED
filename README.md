# LED
controll my LED stripes with Googel Assistant, Alexa and webrowsers 
## setup
### onlyfirst setup

```
cd /var/www/html/LED
sudo unzip pigpio.zip
sudo make
sudo make install
```
now you can set the brithness with
```
pigs p [GPIO-pin-number] [brightness 0-255]
```
### setup the pi

1. start the gpio pins with:
```
sudo pigpiod
````

2. start the ngrok service
```
cd /var/www/html/LED/ngrok
./ngrok http 80
```

### setup ifttt

1. login to: https://ifttt.com/
2. create ua new applet (your username in the right upper corner)
3.  this: Alexa or Aoogle Assistant: "Say a specific phrase" or "Say a phrase with a text ingredient" : type in your phrase ($for the text)
4. that: Webhooks: 
  - Url: http://xxx.ngrok.io/LED/ifttt/color.php?farbe={{TextField}}
  - Method: GET
  - Content Type: text/plain




Inspiration by:
- https://www.hackster.io/tinkernut/cheap-alexa-printer-from-an-old-receipt-printer-c14ea2
- https://www.youtube.com/watch?v=0n3CVYUEmgE
