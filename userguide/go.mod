module userguide

go 1.20

require (
	github.com/defenseunicorns/defense-unicorns-hugo-theme v0.5.1 // x-release-please-version
	github.com/defenseunicorns/defense-unicorns-hugo-theme/dependencies v0.5.1 // x-release-please-version
)

require (
	github.com/FortAwesome/Font-Awesome v0.0.0-20230327165841-0698449d50f2 // indirect
	github.com/twbs/bootstrap v5.3.3+incompatible // indirect
)

replace github.com/defenseunicorns/defense-unicorns-hugo-theme => ../

replace github.com/defenseunicorns/defense-unicorns-hugo-theme/dependencies => ../dependencies
