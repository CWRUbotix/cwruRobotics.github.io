# cwruRobotics.github.io
This repo is the CWRUbotix website, hosted by Github pages.

## Running Locally

[Install Ruby & Jekyll](https://jekyllrb.com/docs/installation/ubuntu/):

```bash
sudo apt-get install ruby-full build-essential zlib1g-dev
```

```bash
echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

```bash
gem install jekyll bundler
```

Install site-specific gems:

```bash
cd cwruRobotics.github.io/
bundle install
```

Serve:

```bash
bundle exec jekyll serve
```