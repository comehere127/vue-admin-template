#!/bin/bash
SRC_DIR=/zserver/html-projects/gt-framework-projects/gt-admin-tool/development/gt-admin-html
DIS_DIR=/zserver/html-projects/gt-framework-projects/gt-admin-tool/production/gt-admin-html
function build-admin-tool {
    echo DEVELOPMENT
    build-admin-tool-env development true
    # echo SANDBOX
    # build-admin-tool-env sandbox false
    # echo STAGING
    # build-admin-tool-env staging false
    echo PRODUCTION
    build-admin-tool-env production true

}

function build-admin-tool-env {
    yarn build:$1
    if [ $2 = true ] ; then
        echo RSYNC
        #rsync -arv --delete $SRC_DIR/dist/* $DIS_DIR
    fi
}

function start {
    echo "1. build ADMIN TOOL ALL ENV"
    echo "2. build ADMIN TOOL DEV"
    read task
    echo "Chọn=> $task"
    case "$task" in
    1)  build-admin-tool;;
    2)  build-admin-tool-env development true;;
    *) echo "Usage: 1 | 2";;
    esac
}

cd $SRC_DIR
yarn lint:fix
start
