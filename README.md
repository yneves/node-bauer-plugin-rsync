# bauer-plugin-rsync

Plugin for `bauer` to execute `rsync` command.

## Installation

```
npm install bauer-plugin-rsync
```

## Usage

The awesome `rsync` wrapper module is used internally to build and execute the command. 

```js
module.exports = function(promise) {
  return promise.rsync({
    source:      "/path/to/source",
    destination: "server:/path/to/destination",
    exclude:     [".git"],
    flags:       "avz",
    shell:       "ssh"
  }).then(function(output) {
    console.log(output.stdout, output.stderr);
  });
};
```

```js
module.exports = function(promise) {
  return promise.return({
    source:      "/path/to/source",
    destination: "server:/path/to/destination",
    exclude:     [".git"],
    flags:       "avz",
    shell:       "ssh"
  }).rsync().then(function(output) {
    console.log(output.stdout, output.stderr);
  });
};
```

## Configuration

```js
{
  workers: 1,
  slots: 1,
  delay: 0,
  options: { // default options for rsync
    
  }
}
```

## API Summary

  * `Promise`
    * `.rsync() :Promise`
    * `.rsync(options Object) :Promise`

## License

[MIT](./LICENSE)
