'use strict'

import {
    ex1,
    ex2,
    ex3,
    scope,
    transformNumber,
    makeSomethingOutOfNumber,
    generateArticleWithSignature,
    finalArticle,
    generateHen,
    hensOnlyNameAndAge,
    mutatedHens,
    averageAgeForHens,
    max7CharsHens,
    specificHen
} from '../src/td01'

import chai from 'chai'
import hens from '../src/hens.js'
chai.expect()
const expect = chai.expect

const test = it

test('exercice 1', () => {
  expect(ex1).to.eq(54)
})

test('exercice 2', () => (
  expect(ex2).to.deep.eq(['dog', 'cat', 'faverjon', 'bird', 'lion', 'squirrel', 'bear', 'pig'])
))

test('exercice 3', () => {
  expect(ex3('dog')).to.eq('cat')
  expect(ex3('anything')).to.eq('anything')
})

test('exercice 4', () => {
  expect(scope()).to.eq('cat')
})

test('exercice 5', () => {
  expect(makeSomethingOutOfNumber).to.be.a('function')
  expect(makeSomethingOutOfNumber.length).to.eq(2)
  expect(makeSomethingOutOfNumber(transformNumber, 41)).to.eq(42)
})

test('exercice 6', () => {
  expect(generateArticleWithSignature).to.be.a('function')
  expect(generateArticleWithSignature.length).to.eq(3)
  expect(finalArticle).to.match(/enfin régénérés/)

  const hasSig = /Pickle/.test(finalArticle) ||
    /Jean-Michel/.test(finalArticle) ||
    /First of Her Name/.test(finalArticle) ||
    /l'immortel/.test(finalArticle)
  expect(hasSig).to.eq(true)
})

test('exercice 7.1', () => {
  expect(generateHen('name', 2, 10, 'red')).to.deep.eq({
    name: 'name',
    species: 'hen',
    legs: 2,
    age: 10,
    furColor: 'red'
  })
})

test('exercice 7.2', () => {
  expect(hensOnlyNameAndAge).to.be.a('function')
  expect(hensOnlyNameAndAge(hens)).to.deep.eq([
    { name: 'Roberte', age: 16 },
    { name: 'Henri', age: 2 },
    { name: 'Georges', age: 1 },
    { name: 'Patrice', age: 8 },
    { name: 'Socrate', age: 10 },
    { name: 'Jean-Hugues', age: 11 },
    { name: 'Michella', age: 3 },
    { name: 'Roxanne', age: 18 }
  ])
})

test('exercice 7.3', () => {
  expect(mutatedHens).to.be.a('function')
  expect(mutatedHens(hens)).to.deep.eq(['Patrice'])
})

test('exercice 7.4', () => {
  expect(averageAgeForHens).to.be.a('function')
  expect(averageAgeForHens(hens)).to.eq(8.625)
})

test('exercice 7.5', () => {
  expect(max7CharsHens).to.be.a('function')
  expect(max7CharsHens(hens)).to.deep.eq([
    'Roberte',
    'Henri',
    'Georges',
    'Patrice',
    'Socrate',
    'Roxanne'
  ])
})

test('exercice 7.6', () => {
  expect(specificHen).to.be.a('function')
  expect(specificHen(hens)).to.deep.eq({
    'name': 'Roberte',
    'species': 'hen',
    'legs': 2,
    'age': 16,
    'furColor': 'red'
  })
})
