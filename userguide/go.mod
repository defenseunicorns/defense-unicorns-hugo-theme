module userguide

go 1.20

require (
	github.com/defenseunicorns/defense-unicorns-hugo-theme v0.3.5 // x-release-please-version
	github.com/defenseunicorns/defense-unicorns-hugo-theme/dependencies v0.3.5 // x-release-please-version
)

replace github.com/defenseunicorns/defense-unicorns-hugo-theme => ../

replace github.com/defenseunicorns/defense-unicorns-hugo-theme/dependencies => ../dependencies
