/*
 * Copyright (c) 2020-2021 Cynthia K. Rey, All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holder nor the names of its contributors
 *    may be used to endorse or promote products derived from this software without
 *    specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

const WEBSITE = 'https://pronoundb.org'

const Endpoints = Object.freeze({
    LOOKUP: (id) => `${WEBSITE}/api/v1/lookup?platform=discord&id=${id}`,
    LOOKUP_BULK: (ids) => `${WEBSITE}/api/v1/lookup-bulk?platform=discord&ids=${ids.join(',')}`
})

const Pronouns = Object.freeze({
    unspecified: null,
    avoid: 'Avoid pronouns, use my name',
    any: 'Any pronouns',
    // -- Contributors: please keep the list sorted alphabetically.
    hh: ['he/him', 'He/Him'],
    hi: ['he/it', 'He/It'],
    hs: ['he/she', 'He/She'],
    ht: ['he/they', 'He/They'],
    ih: ['it/him', 'It/Him'],
    ii: ['it/its', 'It/Its'],
    is: ['it/she', 'It/She'],
    it: ['it/they', 'It/They'],
    shh: ['she/he', 'She/He'],
    sh: ['she/her', 'She/Her'],
    si: ['she/it', 'She/It'],
    st: ['she/they', 'She/They'],
    th: ['they/he', 'They/He'],
    ti: ['they/it', 'They/It'],
    ts: ['they/she', 'They/She'],
    tt: ['they/them', 'They/Them'],
    // --
    ns: ['they/them [ns]', 'They/Them [ns]'],
    any: 'Any pronouns',
    other: 'Other pronouns',
    ask: 'Ask me my pronouns',
    avoid: 'Avoid pronouns, use my name',
})

module.exports = {
    WEBSITE,
    Endpoints,
    Pronouns
}
