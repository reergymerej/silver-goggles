## Reminders

**Log Terminal**

In a separate terminal (so we don't get junk from Vim), run

```
script terminal.log
```

This will log everything in the terminal.  Once finished, `exit` to stop
recording.  Clean up the results with

```
col -bfp < terminal.log > public/06.terminal.log
```


**Date in Text**

Add a timestamp in Vim with `:r !date`.
