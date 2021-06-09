module.exports = {
    "branches": [
        "+([0-9])?(.{+([0-9]),x}).x",
        "main",
        "next",
        "next-major",
        {
            "name": "beta",
            "prerelease": true
        },
        {
            "name": "alpha",
            "prerelease": true
        }
    ],
    "dryRun": false,
    "plugins": [
        [
            "@semantic-release/commit-analyzer",
            {
                "preset": "conventionalcommits"
            }
        ],
        [
            "@google/semantic-release-replace-plugin",
            {
                "replacements": [
                    {
                        "files": [
                            "package.json"
                        ],
                        "from": "\"version\": \".*\"",
                        "to": "\"version\": \"${nextRelease.version}\""
                    }
                ]
            }
        ],
        [
            "@semantic-release/release-notes-generator",
            {
                "preset": "conventionalcommits"
            }
        ],
        "@semantic-release/changelog",
        "@semantic-release/github",
        [
            "@semantic-release/git",
            {
                "message": "chore(release): ${nextRelease.gitTag} [skip ci]\n\n${nextRelease.notes}",
                "assets": ["package.json"]
            }
        ]
    ]
}
