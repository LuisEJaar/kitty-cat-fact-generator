const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  
  const readWrite = (file, filetype) => {
    fs.readFile(file, function(err, data) {
      res.writeHead(200, {'Content-Type': filetype});
      res.write(data);
      res.end();
    });
  } 
  
  const pages = {
    '/': ['index.html', 'text/html'],
    '/otherpage': ['otherpage.html', 'text/html'],
    '/otherotherpage': ['otherotherpage.html', 'text/html'],
    '/js/main.js': ['js/main.js','text/javascript']
  }

  switch (true) {
    case (page in pages):
      readWrite(pages[page][0], pages[page][1])
      break

    case (page == '/api'):
      const arryToJson = [
          "A cat’s learning style is about the same as a 2- to 3-year-old child.",  
          "A cat’s purr vibrates at a frequency of 25 to 150 hertz, which is the same frequency at which muscles and bones repair themselves.",
          "A group of kittens is called a “kindle.”",
          "A house cat could beat superstar runner Usain Bolt in the 200 meter dash.",
          "About half of the cats in the world respond to the scent of catnip.",
          "Cat breeders are called “catteries.”",
          "Cats can be toilet-trained.",
          "Cats can drink sea water in order to survive. (In case you’re wondering, we can’t.)",
          "Cats don’t have an incest taboo, so they may choose to mate with their brothers and sisters.",
          "Cats dream, just like people do.",
          "Cats have contributed to the extinction of 33 different species.",
          "Cats perceive people as big, hairless cats, says Wilde.",
          "Cats were first brought to the Americas in colonial times to get rid of rodents.",
          "Collective nouns for adult cats include “clowder,” “clutter,” “glaring,” and “pounce.”",
          "Each cat’s nose print is unique, much like human fingerprints.",
          "Every Scottish Fold cat in the world can trace its heritage back to the first one, which was found in Scotland in the 1960s, says Cheryl Hogan, a Scottish Fold breeder and the committee chair for the breed at The International Cat Association (TICA).",
          "It’s not uncommon to see cats in food stores in big cities as a form of free — and adorable — pest control.",
          "Kittens in the same litter can have more than one father. This is because the female cat releases multiple eggs over the course of a few days when she is in heat.",
          "Male cats are the most sensitive to catnip, while kittens under 3 months old have no response at all.",
          "Most world languages have a similar word to describe the “meow” sound.",
          "People often think that they’ve stumbled over a purebred as a stray or in a shelter, but Hogan says that this is very uncommon. “Ninety-nine times out of 100 what you have found on the street will not be purebred anything,” she says. “Very seldom do breeders sell kittens that are not already spayed or neutered,” as purebred cats need to meet very strict standards.",
          "Some 700 million feral cats live in the United States, and many shelters run trap-neuter-release programs to stem the population growth.",
          "Studies suggest that domesticated cats first appeared around 3600 B.C.",
          "The first known cat video was recorded in 1894.",
          "There are about 88 million pet cats in the United States, which makes them the most popular pet in the country!",
          "Two hundred feral cats prowl the park at Disneyland, doing their part to control rodents — the ones who don’t wear funny outfits and speak in squeaky voices.",
          "White cats with blue eyes are prone to deafness."
          ]
          const catFactResult = Math.floor(Math.random()*arryToJson.length)
          res.end(JSON.stringify(arryToJson[catFactResult]));
      break
    case (page == '/css/style.css'):
      fs.readFile('css/style.css', function(err, data) {
        res.write(data);
        res.end();
      });
      break
    default: 
      figlet('404!!', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        res.write(data);
        res.end();
      });
      break
  }
});

server.listen(8000);

