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


## Adding an Entry

First, create a new directory in `public/entries/`.  The commentary should be in
a file called `commentary.txt`.  All related resources should go in the same
directory.

```
  ▼ entries/
    ► 01/
    ► 02/
    ► 03/
    ► 04/
    ► 05/
    ► 06/
    ▼ 07/
        commentary.txt
        terminal.log
    ▼ 08/
        commentary.txt
```

### Logging Console

In a new terminal

```
script terminal.log
```

Do anything you want the reader to see here.  Avoid `cmd+k` and opening Vim.
When done recording, `end` then

```
col -bfp < terminal.log > public/entries/XX/terminal.log
```
